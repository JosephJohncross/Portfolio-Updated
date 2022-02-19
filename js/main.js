let navToggler = document.querySelector('.nav-toggler');
// const windowHeight = 
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');

let container = document.querySelector('.container');
let collection = document.querySelectorAll('.active ul')
let active =  document.querySelector('.active');


navToggler.onclick = function(event) {
    
    active.classList.toggle('side-menu');
    active.classList.toggle('menu');
    event.preventDefault();
    
    navToggler.classList.toggle('close');
    navToggler.classList.toggle('menu-icon');
    
}

collection.forEach(function(item) {
    item.addEventListener('click', () => {
        active.classList.remove('side-menu');
        active.classList.add('menu');
        navToggler.classList.add('menu-icon');
        navToggler.classList.remove('close');
    })
})

