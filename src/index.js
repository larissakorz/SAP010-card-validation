import validator from './validator.js';
const inputName = document.querySelector('#inputName');
const name = document.querySelector('#name');
const btnVerificar = document.querySelector('#button');
const imagem = document.querySelector('#imagem')
const inputNumDigitado = document.querySelector('#numDigitado')

inputNumDigitado.addEventListener('input', marcasCard)
inputName.addEventListener('input', modify);
btnVerificar.addEventListener('click', verificar)

function marcasCard() {
  if(inputNumDigitado.value === "4"){
    imagem.src = 'imgs/visa.png';
  }else if(inputNumDigitado.value === "6011"){
    imagem.src = 'imgs/discover.png';
  }else if(inputNumDigitado.value === "50"){
    imagem.src = 'imgs/mastercard.png';
  }else if(inputNumDigitado.value === "34"){
    imagem.src = 'imgs/american.png';
  }
}

function modify(e){
  name.innerHTML = e.target.value;
}

function verificar() {
  const numCartao = document.querySelector('#numDigitado').value;

  const result = validator.isValid(numCartao);
  const maskifyCard = validator.maskify(numCartao);

  if(numCartao === ""){
    alert('Favor inserir seu número de cartão!')
  }else if(result === true){
    alert(maskifyCard + " é Válido!")
  }else{
    alert(maskifyCard + " é Inválido! Favor inserir seu número de cartão novamente")
  }

}
