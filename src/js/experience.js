let empresa = document.getElementById("company")
let cargo = document.getElementById("office")
let descricao = document.getElementById("description")
let data_entrada = document.getElementById("entry_date")
let data_saida = document.getElementById("date_exit")
let experienceList = document.getElementById('experience-list');
const listItems = experienceList.getElementsByTagName('li');
let value = ""
const experience = [
    {
        id: "1",
        empresa: "AdviseU",
        cargo: "Programador Jr",
        descricao: "Meu primeiro emprego, onde eu mais desenvolvi minhas habilidades de programação nos últimos anos.",
        data_mes_inicio: "Fev",
        data_ano_inicio: "2022",
        data_mes_saida: "",
        data_ano_saida: ""
    },
    {
        id: "2",
        empresa: "Finansystech",
        cargo: "Programador Jr. - (Suporte)",
        descricao: "Com parceria da AdviseU, trabalhei junto a Finansystech por um tempo, ajudando com os projetos internos, onde eu aprendi algumas tecnologias novas.",
        data_mes_inicio: "Fev",
        data_ano_inicio: "2023",
        data_mes_saida: "Jun",
        data_ano_saida: "2023"
    },
]

if (!value) {
    const result = experience.find(item => item.id === "1");
    empresa.textContent = result.empresa
    cargo.textContent = result.cargo
    descricao.textContent = result.descricao
    data_entrada.textContent = result.data_mes_inicio + " " + result.data_ano_inicio
    data_saida.textContent = result.data_mes_saida.length > 0 && result.data_ano_saida.length > 0 ? result.data_mes_saida + result.data_ano_saida : "Atualmente"
}

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function() {
    // Obtém o valor do item clicado
    value = this.getAttribute('value');
    
    const result = experience.find(item => item.id === value);
    empresa.textContent = result.empresa
    cargo.textContent = result.cargo
    descricao.textContent = result.descricao
    data_entrada.textContent = result.data_mes_inicio + " " + result.data_ano_inicio
    data_saida.textContent = result.data_mes_saida.length > 0 && result.data_ano_saida.length > 0 ? result.data_mes_saida + " " + result.data_ano_saida : "Atualmente"
});
}
