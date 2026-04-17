
function getElement (selection) {
    const element = document.querySelector(selection);
    // console.log(element);
    
    if (element) {
        return element;
    }
    throw new Error(`please check: '${selection}' selector, no such exist`);
};


function counter (element, value) {
    // console.log(element, value);
    this.element = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;

    // add bind to all function
    this.reset = this.reset.bind(this)
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);

    this.resetBtn.addEventListener('click', this.reset);
    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease)
};


counter.prototype.increase = function () {
    // console.log(this)
    this.value++;
    this.valueDOM.textContent = this.value;
}

counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new counter(getElement(".first-counter"), 100);
const secondCounter = new counter(getElement(".second-counter"), 200);


// firstCounter.increase();
// firstCounter.increase();
// firstCounter.reset();
// secondCounter.decrease();