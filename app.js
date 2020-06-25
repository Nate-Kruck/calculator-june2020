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

    // add the two values together
    const sub = Number(value3) - Number(value4);

    minusSpan.textContent = sub;
})