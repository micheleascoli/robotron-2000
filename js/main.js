const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const cores = ["Amarelo", "Azul", "Branco", "Preto", "Rosa", "Vermelho"];
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) =>{
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle);
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");
    if(operacao === "-"){
        peca.value = parseInt(peca.value)-1;
    } else {
        peca.value = parseInt(peca.value)+1;
    }
}

function atualizaEstatisticas(peca, operacao){
   // console.log(operacao);
   //console.log(pecas[peca]);

    estatisticas.forEach((elemento) => {
        if(operacao === "-"){
            elemento.textContent = parseInt(elemento.textContent)- pecas[peca][elemento.dataset.estatistica];
        } else {
            elemento.textContent = parseInt(elemento.textContent)+ pecas[peca][elemento.dataset.estatistica];
        }
    })

}


/** Solução com JavaScript */


const imagem = document.querySelector("#robotron");
let evento=0;
imagem.addEventListener("click", () => {
   console.log(evento);
   trocaImagem(cores[evento]);
   evento++
   if(evento === 6){
    evento =0;
   }    
})

function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron-2000-"+cor+".png"
}
