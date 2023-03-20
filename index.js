//Minutka

const zvoneni = () => {
   let cvrkot = document.querySelector('.alarm');
    cvrkot.classList.add('alarm--ring');
    console.log('zvoní')
}

let zvuk = document.querySelector('#zvuk')
 {
    zvuk.play(zvoneni)
}
let vstupUzivatele = Number(prompt('Kolik vteřin, než minutka začne zvonit?'))
    let vteriny = vstupUzivatele * 1000
console.log(vteriny)

const budik = setTimeout(zvoneni, vteriny)

