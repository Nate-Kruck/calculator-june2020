// get dom elements
// get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const boogerButton = document.getElementById('add-button');
// get the add-result span
const boogerSpan = document.getElementById('add-result');

// initialize state 

// set the event handler to the button
boogerButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    // add the two values together
    const sum = Number(value1) + Number(value2);

    // update the textContent of the span
    boogerSpan.textContent = sum;
});

// get subtract-input-1
const subInput1 = document.getElementById('subtract-input-1');
// get subtract-input-2
const subInput2 = document.getElementById('subtract-input-2');
// get subtract-button
const minusButton = document.getElementById('subtract-button');
// get subtract-result span
const minusSpan = document.getElementById('subtract-result');

// initialize state

// set the event handler to the button
minusButton.addEventListener('click', () => {
    // in the click event hangler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value3 = subInput1.value;
    const value4 = subInput2.value;

    // subtract the two values together
    const sub = Number(value3) - Number(value4);

    minusSpan.textContent = sub;
})

// get multiply-input-1
const multiplyInput1 = document.getElementById('multiply-input-1');
// get multiply-input-2
const multiplyInput2 = document.getElementById('multiply-input-2');
// get multiply-button
const multiplyButton = document.getElementById('multiply-button');
//get multiply-result span
const multiplySpan = document.getElementById('multiply-result');

// initialize state

// set the event handler to the button
multiplyButton.addEventListener('click', () => {
    const value5 = multiplyInput1.value;
    const value6 = multiplyInput2.value;

    // multiply the two values together
    const multiply = Number(value5) * Number(value6);

    multiplySpan.textContent = multiply;
})

// get divide-input-1
const divideInput1 = document.getElementById('divide-input-1');
// get divide-input-2
const divideInput2 = document.getElementById('divide-input-2');
// get divide-button
const divideButton = document.getElementById('divide-button');
// get divide-result span
const divideSpan = document.getElementById('divide-result');

// initialize state

// set the event handler to the button
divideButton.addEventListener('click', () => {
    const value7 = divideInput1.value;
    const value8 = divideInput2.value;

    // divide the two values together
    const divide = Number(value7) / Number(value8);

    divideSpan.textContent = divide;
})