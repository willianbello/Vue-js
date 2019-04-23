<template>
    <button @click="disparaAcao()"> {{ titulobotao }} </button>
</template>

<script>
export default {
    props: {
        titulobotao:{
            type: String
        },
        confirmacao: false,
    },

    created() {
        if (!this.titulobotao) this.titulobotao = ''
    },

    methods:{
        disparaAcao(){
            if(this.confirmacao && confirm('Confirma Operação ?')){
                this.$emit('botaoAtivado');
            }
        }
    }
}
</script>

<style scoped>
    button { text-decoration: none; font-weight: bold; color: rgb(255, 255, 255); transition: 0.4s; padding: 10px 20px; border-radius: 8px; border: none; cursor: pointer; }
</style>
