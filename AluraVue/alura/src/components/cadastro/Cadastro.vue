<template>
    <div>
        <h2 class="centralizado"> {{ msg }} </h2>
        <h2 class="centralizado"></h2>

        <form @submit.prevent="grava()">
            <div class="controle">
                <label for="titulo">Título</label>
                <!-- <input type="text" id="titulo" :value="foto.titulo" @input="foto.titulo = $event.target.value" autocomplete="off"> -->
                <input type="text" id="titulo" autocomplete="off" v-model.lazy="foto.titulo">
                
            </div>

            <div class="controle">
                <label for="url">Url</label>
                <input type="text" id="url" autocomplete="off" v-model.lazy="foto.url">
                <imagem-responsiva :titulo="foto.titulo" :url="foto.url" class="imagem" v-if="foto.url"/>
            </div>

            <div class="controle">
                <label for="descricao">Descricao</label>
                <textarea id="descricao" cols="30" rows="4" autocomplete="off" v-model="foto.descricao"></textarea>
            </div>
            
            <div class="centralizado">
                <meu-botao titulobotao="GRAVAR" tipo="submit" class="blue"></meu-botao>
                <router-link to="/"><meu-botao titulobotao="VOLTAR" class="gray"></meu-botao></router-link>
            </div>
        </form>
    </div>
</template>

<script>
    import Botao from '../shared/botao/Botao';
    import Imagem from '../shared/imagem-responsiva/ImagemResponsiva';
    import Foto from '../../domain/foto/Foto';
    import FotoService from '../../domain/foto/FotoService';

    export default {
        components:{
            'meu-botao': Botao,
            'imagem-responsiva': Imagem
        },

        data() {
            return {
                msg: "Cadastro",
                foto: new Foto(),
                resource: '',
            }
        },

        methods: {
            grava(){

                this.service.cadastro(this.foto)
                    .then(()=>this.foto = new Foto(), err => console.log(err));
                
                /* this.resource
                    .save(this.foto)
                    .then(()=>this.foto = new Foto(), err => console.log(err)); */

                /* this.$http.post('v1/fotos', this.foto)
                    .then(()=>this.foto = new Foto(), err=>console.log(err)); */
            }
        },

        created(){
            this.service = new FotoService();
        }
    }
</script>

<style scoped>
    .centralizado { text-align: center; }
    .controle { font-size: 1.2em; margin-bottom: 20px; }
    .controle label { display: block; font-weight: bold; }
    .controle label + input, .controle textarea { width: 100%; font-size: inherit; border-radius: 5px; }

    .blue { background-color: rgb(166, 77, 250); }
    .blue:hover { background-color: rgb(137, 56, 212); }

    .gray { background-color: gray; }
    .gray:hover { background-color: rgb(102, 102, 102); }

    .imagem { max-height: 150px; max-width: 150px; }
</style>