// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // Sticky Navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//read more button onclick
function toggleExtra() {
  var extraText = document.getElementById("extra-text");
  var btn = document.getElementById("toggle-btn");
  if (extraText.style.display === "none") {
    extraText.style.display = "inline";
    btn.innerHTML = "Show Less";
  } else {
    extraText.style.display = "none";
    btn.innerHTML = "Read More";
  }
}


// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .profile-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p1, .about-content', { origin: 'right' });


// typed js
const typed = new Typed('.multiple-text', {
    strings: ['in Computer Science'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});


const typedv2 = new Typed('.current-grade-text', {
    strings: ['Computer Engineering'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});
