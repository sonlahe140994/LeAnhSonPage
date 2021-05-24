/*!
 * Start Bootstrap - Grayscale v7.0.0 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function() {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var ob1 = document.getElementById("facebook");
ob1.onclick = function() {
    window.open("https://www.facebook.com/leanhson3107/");
}

var ob2 = document.getElementById("instagram");
ob2.onclick = function() {
    window.open("https://www.instagram.com/zo.sn/");
}
var ob3 = document.getElementById("github");
ob3.onclick = function() {
    window.open("https://github.com/sonlahe140994");
}

var ob4 = document.getElementById("Linked");
ob4.onclick = function() {
    window.open("https://www.linkedin.com/in/le-anh-104b201ab/");
}

document.getElementById("about").onclick = function() {
    window.scroll(0, 1300);
}
document.getElementById("about").onmouseover = function() {
    document.getElementById("about").style.cursor = "pointer";
}
var homeob = document.getElementById("homep");
homeob.onmouseover = function() {
    homeob.style.cursor = "pointer";
}
homeob.onclick = function() {
    location.reload();
}

document.getElementById("pro").onclick = function() {
    window.scroll(0, 2600);
}
document.getElementById("pro").onmouseover = function() {
    document.getElementById("pro").style.cursor = "pointer";
}