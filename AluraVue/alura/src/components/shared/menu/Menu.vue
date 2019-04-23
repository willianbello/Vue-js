<template>
    <nav>
        <ul>
            <li v-for="rota in rotas">
                <router-link :to='rota.path ? rota.path : "/"'><botao :titulobotao="rota.name" class="azul"></botao></router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import Botao from '../botao/Botao.vue'
    export default {
        components: {
            botao:Botao
        },

        props: {
            rotas: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    ul { list-style: none; }
    ul li { display: inline-block; margin-right: 20px; }
    .azul { background-color: rgb(192, 132, 248); }
    .azul:hover { background-color: rgb(165, 73, 252); }
</style>