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

            fill_content(data);

           
            
            
       
        })
        .catch(error => console.error('Error:', error));




});


const fill_content = function (data) {
 
/*parameter the  items of the nav bar*/
const nav_items = document.querySelectorAll(".nav__list li a");
for (let i = 0; i < nav_items.length; i++) {
    nav_items[i].innerText = data.menu[i];
}

const home_items = document.querySelectorAll(".nav__list li a");
for (let i = 0; i < nav_items.length; i++) {
    nav_items[i].innerText = data.menu[i];
}

/*generer les infobulles de mes soft skills*/
const infobulle_items = document.querySelectorAll(".infobulle");
for (let i = 0; i < infobulle_items.length; i++) {
    infobulle_items[i].innerText = data.soft_skills[i];
}


 document.querySelector('.home__title').innerText = data.home.title;
 document.querySelector('.home__subtitle').innerText = data.home.subtitle;
 document.querySelector('.short__description').innerText = data.home.short_description;
 document.querySelector('.more__description').innerText = data.home.more_description;
 document.querySelector('.about_info .section__title').innerText = data.about.about__title;
 document.querySelector('.about__description').innerText = data.about.about__description;
// document.querySelector('.about__description .textDancing').innerText = data.about__image_title;
 document.querySelector('.qualification_title').innerText = data.about.qualification_title;
 document.querySelector('.about__img__text').innerText = data.about.about__image_title;
 document.querySelectorAll('.timeline__item .timeline__text')[0].innerText = data.timeline__text1;

 

 const formation_lieus = document.querySelectorAll(".education .timeline__title");
for (let i = 0; i < formation_lieus.length; i++) {
    formation_lieus[i].innerText = data.formation_lieu[i];
}

const formation_titles = document.querySelectorAll(".education .timeline__text");
for (let i = 0; i < formation_lieus.length; i++) {
    formation_titles[i].innerText = data.formation_title[i];
}

const experience_lieus = document.querySelectorAll(".experience .timeline__title");
for (let i = 0; i < experience_lieus.length; i++) {
    experience_lieus[i].innerText = data.experience_lieu[i];
}

const experience_titles = document.querySelectorAll(".experience .timeline__text");
for (let i = 0; i < experience_titles.length; i++) {
    experience_titles[i].innerText = data.experience_title[i];
}



 // "about__title" : "About Me",
 // "about__description": "Passionate about web development, my educational background and professional journey have equipped me with robust technical skills in web development. ",
 // "about__image_title": "To discover my soft skills, click on the dots within the image.",
 // "qualification_title": "Education",
 // "timeline__text1": "Web Applicatio devlopper"

}
