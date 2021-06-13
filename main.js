class Value{
  constructor(selector){
    this.element = document.querySelector(selector)
    this.textElement = document.querySelector(selector+" h1")
    this.colorBlock = document.querySelector(selector+" div")
  }
  get value(){
    return this.textElement.innerHTML
  }
  set value(value){
    this.setText(value)
  }
  setText(text){
    this.textElement.innerHTML=text
  }
  setColor(r,g,b){
    this.colorBlock.style.color=`rgb(${r},${g},${b})`
  }
}

const R = new Value(".R")
const G = new Value(".G")
const B = new Value(".B")
console.log("Hello World 🚀");