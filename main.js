class Value {
	/**
	 *
	 * @param {string} selector Selector for element
	 */
	constructor(selector) {
		this.selector = selector;
		this.element = document.querySelector(selector);
		this.textElement = document.querySelector(selector + " h1");
		this.colorBlock = document.querySelector(selector + " div");
	}
	get value() {
		return this.textElement.innerHTML;
	}
	set value(value) {
		this.setText(value);
		const mode = this.selector.replace(".", "").toLowerCase();
		switch (mode) {
			case "r":
				this.setColor(value, 0, 0);
				break;

			case "g":
				this.setColor(0, value, 0);
				break;

			case "b":
				this.setColor(0, 0, value);
				break;

			default:
				break;
		}
	}
	setText(text) {
		this.textElement.innerHTML = text;
	}
	/**
	 * @param {number} r red value
	 * @param {number} g green value
	 * @param {number} b blue value
	 */
	setColor(r, g, b) {
		this.colorBlock.style.color = `rgb(${r},${g},${b})`;
	}
}
class Item {
	/**
	 * @param {Element} element The element
	 * @param {number} index The index in array
	 */
	constructor(element,index) {
		this.element = element;
    this.index= index
    this.element.onclick = ()=>checkResult(this)
	}
	/**
	 * @param {number} r red value
	 * @param {number} g green value
	 * @param {number} b blue value
	 */
	setColor(r, g, b) {
		this.element.style.backgroundColor = `rgb(${r},${g},${b})`;
	}
}
const R = new Value(".R");
const G = new Value(".G");
const B = new Value(".B");
/**
 * right number
 * @type {number}
 */
let rightOne=100;
/**
 * list of All Elements
 * @type {Item[]}
 */
const items = [];
document.querySelectorAll(".items .item").forEach((value, key) => {
	items.push(new Item(value,key));
});

console.log("Hello World 🚀");

function checkResult(item) {
    if(item.index === rightOne ){
      alert("You Won")
    }else{
      console.log(item.index,rightOne)
      showSnackBar("Try Again")
    }
}
function generateRandomColor(difficulty = 1) {
	if (difficulty <= 1) {
		const [r, g, b] = [0, 0, 0].map(() => Math.floor(Math.random() * 255));
		R.value = r;
		G.value = g;
		B.value = b;
    rightOne = Math.floor(Math.random() * items.length)
    console.log(rightOne)
    items.forEach((item,idx)=>{
      if (idx==rightOne){
        return item.setColor(r,g,b)}
      else{
        let rnd = ()=>randomNumber(0,255)
        item.setColor(rnd(),rnd(),rnd())
      }
    })
	}
}
