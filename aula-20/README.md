### Aula 20 Vue js
###### Transições
<ul>
    <li>É posspivel adicionar transições e animações no vue através de prefixos e controlar isso através de eventos v-on.</li>
    <li>v-enter: aplica a classe antes do elemento ser inserido, removida após 1 frame</li>
    <li>v-enter-active: aplica antes do elemento ser inserido e é removida só quando a transição termina, removida após o término da transição</li>
    <li>v-enter-to: adicionado um frame após o elemento ser inserido (ao mesmo tempo que o v-enter é removido)</li>
    <li>v-leave: aplicado quando a transição de saída é acionada e removida após 1 frame.</li>
    <li>v-leave-active: aplica antes quando a transição de saída é acionada e removida quando a transição termina.</li>
    <li>v-leave-to: adicionada após um frame da transição de saída ser disparado (mesmo momento que a v-leave é removida)</li>
</ul>