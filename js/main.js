
const robotron =  document.querySelector("#robotron");


const subtrair =  document.querySelector("#subtrair");
const somar =  document.querySelector("#somar");
const braco =  document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento) =>{
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent);
        console.log(evento);
    })
})


function manipulaDados(operacao, parteCorpo) {
    if(operacao === "-"){
        braco.value = parseInt(braco.value)-1;
    } else {
        braco.value = parseInt(braco.value)+1;
    }
}


/*************************** */
robotron.addEventListener("click", (evento) => {
    console.log(evento);
})

function dizOi(nome) {
    console.log("oi");
    console.log(nome);
    console.log("Bem-vindo ao Robotron 2000");
}

dizOi();