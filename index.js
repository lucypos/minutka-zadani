//Minutka

const zvoneni = () => {
   let cvrkot = document.querySelector('.alarm');
    cvrkot.classList.add('alarm--ring');
    console.log('zvoní')

let zvuk = document.querySelector('audio')
zvuk.play()
}

let vstupUzivatele = Number(prompt('Kolik vteřin, než minutka začne zvonit?'));
    let vteriny = vstupUzivatele * 1000;
console.log(vteriny)

const budik = setTimeout(zvoneni, vteriny)
/*
const preruseniZvoneni = () => {
    cvrkot.classList.remove ('alarm--ring', 'audio');
    console.log('Zrušeno')
}
*/
const preruseniZvoneni = document.querySelector('.vypnout');
vypnout.addEventListener('click', () => {
  clearTimeout(budik);
  let cvrkot = document.querySelector('.alarm');
  cvrkot.classList.remove('alarm--ring');
  console.log('zrušeno')
})