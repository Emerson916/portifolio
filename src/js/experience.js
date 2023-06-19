const empresa = document.getElementById("company")
const cargo = document.getElementById("office")
const descricao = document.getElementById("description")
const data_entrada = document.getElementById("entry_date")
const data_saida = document.getElementById("date_exit")
const experienceList = document.getElementById('experience-list');
const listItems = experienceList.getElementsByTagName('li');
let value = ""

for (let i = 0; i < listItems.length; i++) {
listItems[i].addEventListener('click', function() {
    // Obtém o valor do item clicado
value = this.getAttribute('value');
    console.log('Valor selecionado:', value);
});
}

const experience = [
    {
        id: "1",
        empresa: "AdivseU",
        cargo: "Programador Jr",
        descricao: "teste",
        data_mes_inicio: "Fev",
        data_ano_inicio: "2021",
        data_mes_saida: "",
        data_ano_saida: ""
    },
    {
        id: "2",
        empresa: "AdivseU - 2",
        cargo: "Programador Jr - 2",
        descricao: "teste - 2",
        data_mes_inicio: "Fev2",
        data_ano_inicio: "20212",
        data_mes_saida: "Fev 2",
        data_ano_saida: "20212"
    },
]
console.log('Valor selecionado 2:', value);

const result = experience.find( item => item.id === value);

empresa.textContent = result.empresa
cargo.textContent = result.cargo
descricao.textContent = result.descricao
data_entrada.textContent = result.data_mes_inicio + " " + result.data_ano_inicio
data_saida.textContent = result.data_mes_saida.length > 0 && result.data_ano_saida.length > 0 ? result.data_mes_saida + result.data_ano_saida : "Atualmente"

