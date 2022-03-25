
// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


// select items
const navToggle = document.querySelector('.nav-toggle');
const menuArea = document.querySelector('.menu-area');


// mobile menu open/close
navToggle.addEventListener('click', () => {

    menuArea.classList.toggle('toggle');
})

//Desktop menu fixed when scroll
window.addEventListener('scroll', () => {

    if (window.pageYOffset >= 90) {

        navbar.classList.add("sticky");
    } else {

        navbar.classList.remove("sticky");
    }
})

