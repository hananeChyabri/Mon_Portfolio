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
    /*generer les infobulles de mes soft skills*/
    const infobulle_items = document.querySelectorAll(".infobulle");
    for (let i = 0; i < infobulle_items.length; i++) {
        infobulle_items[i].innerText = data.soft_skills[i];
    }


    document.querySelector('.home__title').innerText = data.home.title;
    document.querySelector('.home__subtitle').innerText = data.home.subtitle;
    document.querySelector('.about__Button').innerText = data.home.buttonMoreAboutMe;
    const home_descriptionParagraphes = document.querySelectorAll(".home__description p");
    for (let i = 0; i < home_descriptionParagraphes.length; i++) {
        home_descriptionParagraphes[i].innerText = data.home_description[i];
    }
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

    /*Parametrer la section Compétences*/
    const title_section_skills = document.querySelector(".skills .section__title");
    title_section_skills.innerHTML = data.skills.title_section;

    /*Parametrer la section Portfolio*/
    //titre de la section Portfolio
    const title_section_portfolio = document.querySelector(".portfolio .section__title");
    title_section_portfolio.innerHTML = data.portfolio.title_section;

    const porjects_descriptions = document.querySelectorAll(".portfolio__item-details .detail__description");
    for (let i = 0; i < porjects_descriptions.length; i++) {
        porjects_descriptions[i].innerText = data.porjects_description[i];

    }
    /*Contact*/

    const contacts = document.querySelectorAll(".link-contact .subtitle__contact");
    for (let i = 0; i < contacts.length; i++) {
        console.log(contacts[i])
        contacts[i].innerText = data.contact[i];
    }



}
