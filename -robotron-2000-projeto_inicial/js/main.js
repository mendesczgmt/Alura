const controle = document.querySelectorAll("[data-controler]");

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('.controle-contador');

    if(operacao === "+") {
        peca.value ++
    }
    else {
        if(peca.value > 0) {
            peca.value --
        }
        else {
            console.log('número de braços mínimos atingidos')
        }
    }
}