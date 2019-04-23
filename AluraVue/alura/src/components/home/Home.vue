  <template>
  <div>
      <h2 class="centralizado"> {{ msg }} </h2>
      <p class="centralizado" v-if="mensagem"> {{ mensagem }} </p>
      <input type="search" @input="filtro = $event.target.value" class="filtro" placeholder="filtre por parte do título">
      <ul class="lista-fotos">
        <li v-for="foto in fotosComFiltro" class="lista-fotos-item">
          <meu-painel :titulo="foto.titulo">
            <imagem-responsiva v-meu-transform:scale.animate="1.1" :url="foto.url" :titulo="foto.titulo"></imagem-responsiva>
            <botao titulobotao="REMOVER" class="mb-05 red" @botaoAtivado="remove(foto)" :confirmacao="true"></botao>
          </meu-painel>
        </li>
      </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';
import FotoService from '../../domain/foto/FotoService';

export default {
  
  components:{
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    botao: Botao,
  },

  data () {
    return {
      msg: 'Bem vindo ao Vue js',
      fotos: [],
      filtro: '',
      mensagem: '',
      resource: '',
    }
  },

  computed: {
    fotosComFiltro(){
      if(this.filtro){
        /* filtrar */
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }else{
        return this.fotos;
      }
    }
  },

  created(){

    this.service = new FotoService(this.$resource);

    this.service
      .lista()
      .then(fotos => this.fotos = fotos, err => console.log(err));
    
    /* let promise = this.$http.get('v1/fotos');
    promise
      .then(resp => resp.json())
      .then(fotos => this.fotos = fotos, err => console.log(err)); */
  },

  methods: {

    remove(foto){

      this.service.apaga(foto._id)
        .then(()=>{
          this.mensagem = `Foto ${foto.titulo} removida com Sucesso`;
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
        }, err =>{
          console.log(err);
          this.mensagem = 'Não foi possível remover a foto';
        });
      /* this.resource
        .delete({ id: foto._id })
        .then(()=>{
          this.mensagem = `Foto ${foto.titulo} removida com Sucesso`;
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
        }, err =>{
          console.log(err);
          this.mensagem = 'Não foi possível remover a foto';
        }); */

      /* this.$http
        .delete(`v1/fotos/${foto._id}`)
        .then(()=>{
            this.mensagem = `Foto ${foto.titulo} removida com Sucesso!`;
            let indice = this.fotos.indexOf(foto);
            this.fotos.splice(indice, 1);
          }, err=>{
            console.log(err);
            this.mensagem = 'Não foi possível remover a foto';
        }); */
    }

  },

}
</script>
  
<style>

  .centralizado { text-align: center; }
  .lista-fotos { list-style: none; }
  .lista-fotos .lista-fotos-item { display: inline-block; }
  .mb-05 { margin-bottom: 5px; }
  .filtro { display: block; width: 100%; border-radius: 5px; padding: 7px; border: 2px solid rgb(222, 229, 253); }
  .red { background-color: red; }
  .red:hover { background-color: rgb(206, 3, 3); }
</style>
