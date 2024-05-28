//troca o título do h1<tag)
let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do número secreto";

let paragrafo = document.querySelector("p"); //document para falar que é um documento e querySelector para selecionar o alvo entre aspas
paragrafo.innerHTML = "Escolha um número entre 1 e 10"; //innerhtml para inserir algo no html

//para se comunicar com o html no onclick tem que ser O MESMO nome
function verificarChute(){
    console.log("O botão foi clicado")
}