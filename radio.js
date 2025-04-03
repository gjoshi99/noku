const kort = document.querySelector("#radioKort");
const Swish = document.getElementById('radioSwish');
const KortSpan = document.querySelector('.kort');
const swishSpan = document.querySelector('.Swish');

let kortchecked = false
let swishChecked = false
document.querySelector('.kort').addEventListener('click', (e) => {
    console.log('clicked');
    kort.checked = true
    KortSpan.style.borderColor = 'green';
    swishSpan.style.borderColor = 'black';
    kortchecked = true;
    swishChecked = false;
})
document.querySelector('.Swish').addEventListener('click', (e) => {
    console.log('swish');
    Swish.checked = true
     KortSpan.style.borderColor = 'black';
     swishSpan.style.borderColor = 'green'
     kortchecked = false;
     swishChecked = true;
})