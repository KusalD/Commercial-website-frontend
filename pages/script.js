'use strict';


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}








//cart response
//initialing all elements

const priceElem = document.querySelectorAll('#price');
const decrementBtn = document.querySelectorAll('#decrement');
const quantityElem = document.querySelectorAll('#quantity');
const incrementBtn = document.querySelectorAll('#increment');
const totalpriceElem = document.querySelectorAll('#totalprice');
const cartAmountElem = document.querySelector('#cartAmount');
const shippingElem = document.querySelector('#shipping');
const taxElem = document.querySelector('#tax');
const totalElem = document.querySelector('#total');

//loop to add event on adding and removing elements
for (let i = 0; i < incrementBtn.length; i++){
    incrementBtn[i].addEventListener('click', () => {
        let increment = Number(this.previousElementSibling.textContent);
        increment++;
        this.previousElementSibling.textContent = increment;
        totalCalc();
    });

    decrementBtn[i].addEventListener('click', () => {
        let decrement = Number(this.nextElementSibling.textContent);
        decrement <= 0 ? 1 : decrement--;
        this.nextElementSibling.textContent = decrement;
        totalCalc();
    });

}


//for calculating total amount of price 

const totalCalc = function(){
    //initialing all required values 
    const tax = 0.05;
    let subtotal = 0;
    let totalTax = 0;
    let total = 0;

    //loop to calc total price of each items based in number
    for (let i = 0; i < quantityElem.length; i++){
        totalpriceElem[i].textContent = Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);
    }

    //loop to calculate subtotal before tax and shipping
    for (let i = 0; i < quantityElem.length; i++){
        subtotal += Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);

    }

    cartAmountElem.textContent = subtotal.toFixed(2);
    

    totalTax = subtotal * tax;

    taxElem.textContent = totalTax.toFixed(2);

    total = subtotal + totalTax;

    totalElem.textContent = total.toFixed(2);

}

// const cartbth = document.querySelector('#cartbtn');
// function addcart() {
//     cartbth.addEventListener('click', ()=> {
//         numberOfpro.value = quantityElem.textContent
//     })
// }

