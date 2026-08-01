/*==============================
YAYO WOREDA WEBSITE
==============================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});


/*==============================
COUNTER ANIMATION
==============================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");

    const top = statsSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let current = 0;

            const increment = target / 120;

            const updateCounter = () => {

                if (current < target) {

                    current += increment;

                    counter.innerText = Math.ceil(current).toLocaleString();

                    requestAnimationFrame(updateCounter);

                }

                else {

                    counter.innerText = target.toLocaleString();

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounter);

window.addEventListener("load", startCounter);


/*==============================
FADE-IN ANIMATION
==============================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

    ".card, .about-image, .about-text, .item, .stat, .contact-box div"

).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/*==============================
MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("mobile");

});


/*==============================
SMOOTH ACTIVE LINK
==============================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});


/*==============================
GALLERY HOVER EFFECT
==============================*/

document.querySelectorAll(".gallery-grid .item").forEach(item => {

    item.addEventListener("mousemove", (e) => {

        const rect = item.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        item.style.transformOrigin = `${x}px ${y}px`;

    });

});


/*==============================
PARALLAX EFFECT
==============================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const offset = window.pageYOffset;

    hero.style.backgroundPositionY = offset * 0.45 + "px";

});


/*==============================
BUTTON RIPPLE
==============================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        circle.style.width = diameter + "px";

        circle.style.height = diameter + "px";

        circle.style.left =

            e.clientX -

            this.getBoundingClientRect().left -

            diameter/2 + "px";

        circle.style.top =

            e.clientY -

            this.getBoundingClientRect().top -

            diameter/2 + "px";

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});


/*==============================
PRELOADER (OPTIONAL)
==============================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*==============================
CONSOLE MESSAGE
==============================*/

console.log(

"%cWelcome to Yayo Woreda",

"color:#0b5d3a;font-size:22px;font-weight:bold;"

);

console.log(

"%cDesigned with HTML, CSS & JavaScript",

"color:#d8b14d;font-size:15px;"

);