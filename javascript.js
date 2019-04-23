function init() {
    const nav = document.querySelector("#nav");
    const navIndexs = document.querySelector("#navIndexs");
    const navIndex = document.querySelectorAll("#navIndexs li");
    const navHamburger = document.querySelector("#navHamburger");
    const about = document.querySelector("#about");

    window.addEventListener("scroll", () => {
        parallax(".greet-bg", window.scrollY, 0.75);
        // FIXME: navbar display error afer refresh
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
    });

    navHamburger.addEventListener("click", () => {
        navIndexs.classList.toggle("nav-indexs-active");
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