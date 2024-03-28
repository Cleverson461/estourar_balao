function tecladoApertado(event){
    console.log(`Teclado Apertado: ${event.keyCode}`)

    if(event.keyCode === 66){
        console.log("Voce apertou o enter!")
    }
}

function soltouteclado(event){
    console.log('Soltou o teclado!!')
}

function apertouUmaTecla(event){
    console.log('Apertou um tecla!! ' + event)
}