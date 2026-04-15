
function counter (element, value) {
    // console.log(element, value);
    this.elements = element;
    this.values = value;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.values;
};

const firstCounter = new counter(getElement(".first-counter"), 100);
const secondCounter = new counter(getElement(".second-counter"), 200);



function getElement (selection) {
    const element = document.querySelector(selection);
    // console.log(element);
    
    if (element) {
        return element;
    }
    throw new Error(`please check: '${selection}' selector, no such exist`);
};