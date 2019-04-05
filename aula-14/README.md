### Aula 14 Vue js
###### Enviando e Recebendo dados entre Componentes pais e filhos
<ul>
    <li>props: passa parâmetros do componente PAI para o componente FILHO.</li>
    <li>emit: passa parâmetros do componente FILHO para o componente PAI</li>
    <li><h5>Obs:</h5>
        <ul>
            <li>Em componentes a propriedade Data deve ser passada como função.</li>
            <li>É possível dizer que um parâmetro é obrigatório através do required: true.</li>
            <li>Deve se escutar a passagem de parâmentro do componente filho para o componente pai com o @emit ou v-on:&lsaquo;emit&rsaquo;="getlink"</li>
            <li>para emitir do componente filho para o componente pai usar o this.$emit('&lsaquo;emit&rsaquo;', index)</li>
        </ul>
    </li>
</ul>