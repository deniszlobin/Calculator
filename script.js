let display = document.querySelector('#display')
let buttons = document.getElementsByClassName('button')
let buttonC = document.querySelector('#button_C')
let str = ''
buttonC.addEventListener('click', calculator)
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', calculator)
  
}

function calculator() {
  let type = this.getAttribute('data-type')
  if (type === '=') {
    str = eval(str)
    display.value = str
  }else if(type === 'C'){
    str = ''
  }else if(type === '⌫'){
    str = str.substring(0, str.length - 1)
  }else if(type === 'x²'){
    str = str * str
  }
  else{
  str += type 
  
  }
  display.value = str
}