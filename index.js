

const countVal=document.querySelector('#counter');

const increment=function()
{
    let value=parseInt(countVal.innerText);
    value+=1;
    countVal.innerText=value;
}

const decrement=function()
{
    let value=parseInt(countVal.innerText);
    value+=-1;
    countVal.innerText=value;
}

/*

addEvent Listener
const countVal = document.querySelector('#counter');
const incrementBtn = document.querySelector('#incrementBtn');
const decrementBtn = document.querySelector('#decrementBtn');

const increment = function() {
    let value = parseInt(countVal.innerText);
    value += 1;
    countVal.innerText = value;
}

const decrement = function() {
    let value = parseInt(countVal.innerText);
    value -= 1;
    countVal.innerText = value;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);*/