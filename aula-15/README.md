### Aula 15 Vue js
###### Enviando e Recebendo dados entre Componentes não parentes
<ul>
    <li>EventBus É usado para criar uma transferência de dados entre componentes, porém deve ser evitado em duas situações.</li>
    <li>1 - Quando o projeto é muito grande e há diversos componentes é mais adequado o uso do Vuex</li>
    <li>2 - Quando o projeto é muito pequeno e há pouquíssima transferência de dados. Neste caso o EventBus demando muito processamento. Não compensa usar tanto recurso de processamento para somente pouquíssimos dados.</li>
</ul>