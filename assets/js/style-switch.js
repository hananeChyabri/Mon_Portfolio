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
            document.querySelector('.about_info .section__title').innerText = data.about__title;
           // document.querySelector('.about__description').innerText = data.about__description;
           // document.querySelector('.about__description .textDancing').innerText = data.about__image_title;
            document.querySelector('.qualification_title').innerText = data.qualification_title;
           
            document.querySelectorAll('.timeline__item .timeline__text')[0].innerText = data.timeline__text1;
      



            // "about__title" : "About Me",
            // "about__description": "Passionate about web development, my educational background and professional journey have equipped me with robust technical skills in web development. ",
            // "about__image_title": "To discover my soft skills, click on the dots within the image.",
            // "qualification_title": "Education",
            // "timeline__text1": "Web Applicatio devlopper"

            
            
       
        })
        .catch(error => console.error('Error:', error));




});

