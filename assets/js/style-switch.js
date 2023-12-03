const switchStyleToggle = document.querySelector(".style__switch-toggle");
switchStyleToggle.addEventListener("click", () => {

    document.querySelector(".style__Switch").classList.toggle("open");

})

window.addEventListener("scroll", () => {
    if (document.querySelector(".style__Switch").classList.contains("open")) {
        document.querySelector(".style__Switch").classList.remove("open")
    }
})

/* Theme colors */

const switchStyleElms = document.querySelectorAll(".styleSwich");

function setActiveStyle(color) {
    switchStyleElms.forEach((style) => {

        if (color == style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    }
    )
};

const switchLnaguageIcon = document.querySelector('.langue__switch-toggle');

//const switchLnaguageElms = switchLnaguageIcon.document.querySelectorAll('span');
let language = 'en'; // Langue par défaut
switchLnaguageIcon.addEventListener('click', (event) => {

    document.querySelector(".frensh").classList.toggle("active__laguage");
    document.querySelector(".english").classList.toggle("active__laguage");

    language = (language === 'en') ? 'fr' : 'en'; // Toggle entre 'en' et 'fr'



    fetch("./assets/js/" + language + ".json")
        .then(response => response.json())
        .then(data => {

            /*parameter the  items of the nav bar*/
            document.querySelector('.nav__item a[href="#home"]').innerText = data.nav__home;
            document.querySelector('.nav__item a[href="#about"]').innerText = data.nav__about;
            document.querySelector('.nav__item a[href="#skills"]').innerText = data.nav__skills;
            document.querySelector('.nav__item a[href="#portfolio"]').innerText = data.nav__portfolio;
            document.querySelector('.nav__item a[href="#contact"]').innerText = data.nav__contact;
            document.querySelector('.home__title').innerText = data.home__title;
            document.querySelector('.home__subtitle').innerText = data.home__subtitle;
            document.querySelector('.home__description').innerText = data.home__description;

            
            
       
        })
        .catch(error => console.error('Error:', error));




});

