function init() {
    const nav = document.querySelector("#nav");
    const navIndexes = document.querySelector("#navIndexes");
    const navIndex = document.querySelectorAll("#navIndexes li");
    const navHamburger = document.querySelector("#navHamburger");
    const about = document.querySelector("#about");
    const breaking = document.querySelector(".breaking");
    const hawkingQuote = document.querySelector(".breaking article");

    parallax(".greet-bg", window.scrollY, 0.75);
    window.addEventListener("scroll", () => {
        parallax(".greet-bg", window.scrollY, 0.75);
        if ((window.scrollY + nav.offsetHeight) >= about.offsetTop) {
            nav.classList.remove("nav");
            nav.classList.add("nav-scroll");
            navHamburger.classList.remove("nav-hamburger");
            navHamburger.classList.add("nav-hamburger-scroll");
        } else {
            nav.classList.remove("nav-scroll");
            nav.classList.add("nav");
            navHamburger.classList.remove("nav-hamburger-scroll");
            navHamburger.classList.add("nav-hamburger");
        }

        if (window.scrollY > (breaking.offsetTop + (breaking.clientHeight * 1 / 5))) {
            hawkingQuote.classList.add("blackhole");
        } else if (window.scrollY < breaking.offsetTop) {
            hawkingQuote.classList.remove("blackhole");
        }
    });

    navHamburger.addEventListener("click", () => {
        navIndexes.classList.toggle("nav-indexes-active");
        navIndex.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation =
                    `navIndexFade 0.5s ease forwards ${(index / 7) + 0.1}s`;
            }
        });
        navHamburger.classList.toggle("toggle");
    });
}

function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}