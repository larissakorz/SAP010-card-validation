import validator from './validator.js';
const inputName = document.querySelector('#inputName');
const name = document.querySelector('#name');
const btnVerificar = document.querySelector('#button');

inputName.addEventListener('input', modify);
btnVerificar.addEventListener('click', verificar)

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

  numCartao.value = ""
}
