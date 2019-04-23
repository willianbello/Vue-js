  <template>
  <div class="corpo">
      <meu-menu :rotas="routes" class="mt-5"></meu-menu>
      <transition name="transicao-pagina">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';
import Botao from './components/shared/botao/Botao.vue';

export default {
  components: {
    'meu-menu':Menu,
    botao:Botao
  },

  data() {
    return {
      routes
    }
  },
}
</script>
  
<style>

  .corpo { font-family: Helvetica, sans-serif; width: 96%; margin: 0 auto; }
  .transicao-pagina-enter{
    opacity: 0;
  }

  .transicao-pagina-enter-to {
    opacity: 1;
  }

  .transicao-pagina-enter-active{
    transition: opacity 1s;
  }

  .transicao-pagina-leave{
    opacity: 0;
  }

  .transicao-pagina-leave-to{
    opacity: 1;
  }

  .mt-5 { margin-top: 50px; }

</style>
