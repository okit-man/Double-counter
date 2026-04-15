
function counter (element, value) {
    console.log(element, value);
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