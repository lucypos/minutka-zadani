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

const preruseniZvoneni = document.querySelector('.vypnout');
vypnout.addEventListener('click', () => {
  clearTimeout(budik);
  let cvrkot = document.querySelector('.alarm');
  cvrkot.classList.remove('alarm--ring');
  document.querySelector('audio').pause();
  console.log('zrušeno')
})
document.getElementById('vypnout').addEventListener('click', preruseniZvoneni);