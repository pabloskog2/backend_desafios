function saludar () {
    console.log('Hola')
}

const timer1 = setInterval (saludar, 1000);

const timer2 = setTimeout(() => {
    clearInterval(timer1)
}, 6000)

clearTimeout(timer2)