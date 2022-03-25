// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const menuArea = document.querySelector('.menu-area');
// const sticky = document.querySelector('#sticky');



navToggle.addEventListener('click', () => {

    menuArea.classList.toggle('toggle');
})




// ********** fixed navbar ************


// ********** smooth scroll ************
// select links



// console.log(window.scrollTo);

window.addEventListener('scroll', () => {

    // const height = window.pageYOffset;
    // console.log(height, "pageYOffset");
    
})