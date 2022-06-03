

const form = document.getElementById('form');
const input = document.querySelector('.input');
const error = document.querySelector('.error');
const list = document.querySelector('#list');
let message = '';
let data = {};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('click registered');

    inputValidation();
});

// create a dynamic message to include in the browser
const createText = (text) => {
    return document.createTextNode(message);
}

// check whether there is an input
const inputValidation = () => {
    if (input.value === '') 
    { 
        console.log('input validation failed');
        error.innerHTML = 'Input cannot be blank!'
        console.log('error message dispatched')
    }
    else 
    { 
        console.log('success');
        error.innerHTML = '';
        acceptData();
        list.appendChild(createElmt('li', 'list-item', data.text, createElmt('a', 'link-edit', 'Edit'), createElmt('a', 'link-delete', 'Delete')));
    };
    // if empty input log fail otherwise log success
};

// collect user data push it to data object
const acceptData = () => {
    data['text'] = input.value;
    console.log(data);
    input.value = '';
};

// Create a shopping list element
const createElmt = (type, attributeValue, ...children) => {
    let node = document.createElement(type);
    for (let child of children) {
        node.setAttribute('id', attributeValue);
        if (typeof child != 'string')
        node.appendChild(child);
        else node.appendChild(document.createTextNode(child));
    }
    return node;
};


// What I've learned today:
// document.getElementById('elementId');
// document.querySelector('elementSelector');
// declaring variables first
// creating event listeners
// realized ev listeners run code each time e occurs
// e.preventDefault() to stop default form behavior
// creating new functions
// invoking functions where they need to occur
// accepting data
// storing data
// resetting input fields
// creating utility functions
// spread operation
// for (let child of children)
// creating element nodes containing stored data
// creating child element of created elements
// setting attributes to element and child nodes

