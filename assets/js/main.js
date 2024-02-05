const buttonAboutMe = document.querySelector(".about__Button");
const icon = buttonAboutMe.querySelector("i");
//changer la retation de la flesh du boutton more about me 

buttonAboutMe.addEventListener("mouseover", () => {
    icon.classList.toggle("fa-rotate-90");
});

buttonAboutMe.addEventListener("mouseout", () => {

    icon.classList.toggle("fa-rotate-90");
});


// Fonction pour afficher l'infobulle au clic sur une zone
function afficherInfobulle(zone) {
    let infobulle = document.getElementById(zone.getAttribute('data-info'));
    infobulle.classList.toggle("displayStyle");
}
// configuration mixitup

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*POPUP WORK PORTFOLIO*/

document.addEventListener("click", (event) => {
    console.log(event.target.classList);
    if (event.target.classList.contains("work__button") || event.target.classList.contains("img__work")) {

        OpenClosePortfolio();
        portfolioItemDetails(event.target.parentElement);
    }
});
/*fonction pour changer la couleur de l element active du menu*/
const navElements = document.querySelectorAll(".nav__link");
navElements.forEach(element => {

    element.addEventListener('click', (event) => {
        navElements.forEach(item => {
            item.classList.remove('active-link');
        });
        event.target.classList.add("active-link");

    });

});

document.addEventListener("DOMContentLoaded", function () {
    
    // window.addEventListener("scroll", function () {
    //     console.log(window.scrollY);
    //     if (window.scrollY > 900) {
    //         console.log("je suis ici");
    //         navElements.forEach(item => {
    //             if (item.getAttribute('href') === "#about") 
    //                 item.classList.add('active-link');
                
    //             else item.classList.remove('active-link');});
    //          }
    //         });

    window.addEventListener("scroll", function () {
        console.log(window.scrollY);
        if (window.scrollY > 644) {
          navElements.forEach(item => item.classList.toggle('active-link', item.getAttribute('href') === "#about"));
        }
        if (window.scrollY > 1250) {
            navElements.forEach(item => item.classList.toggle('active-link', item.getAttribute('href') === "#skills"));
          }
          if (window.scrollY > 1800) {
            navElements.forEach(item => item.classList.toggle('active-link', item.getAttribute('href') === "#portfolio"));
          }
          if (window.scrollY > 2400) {
            navElements.forEach(item => item.classList.toggle('active-link', item.getAttribute('href') === "#contact"));
          }
      });
        });
        


//changer la couleur de le lemet active dans le filtre portfolio 




const filtrWorkElements = document.querySelectorAll(".work__item");
filtrWorkElements.forEach(element => {

    element.addEventListener('click', (event) => {
        filtrWorkElements.forEach(item => {
            item.classList.remove('active-work');
        });
        event.target.classList.add("active-work");

    });

});



/* arreter l animation au clique sur le point dans l image de soft skills  */

const pins = document.querySelectorAll('.pin');
pins.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('paused');
    });

});


document.querySelector(".portfolio__popup-close").addEventListener("click", OpenClosePortfolio);
//fonction pour ouvrir/ fermer le popup de chaque work du portfolio
function OpenClosePortfolio() {

    document.querySelector(".portfolio__popup").classList.toggle("open");

}
//changer le detail de chaque item du pop up selon le work choisi
function portfolioItemDetails(parentElement) {
    document.querySelector(".pp__img img").src = parentElement.querySelector(".img__work").src;
    // document.querySelector(".pp__img img").src = parentElement.querySelector(".img__work").src;
    document.querySelector(".portfolio__popup-subtitle").innerHTML = parentElement.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = parentElement.querySelector(".portfolio__item-details").innerHTML;
}

/*afficher plus de description en cliquant sur plus*/

function toggleDescription() {
    const moreText = document.querySelector('.more__description');
    const readMoreBtn = document.querySelector('.read-more');

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        readMoreBtn.textContent = "Moins";
    } else {
        moreText.style.display = "none";
        readMoreBtn.textContent = "... Plus";
    }
}


// Sélection du menu
const navbar = document.getElementById('navbar');

// Fonction pour masquer le menu sur la première section
function toggleNavbarVisibility() {

    const homeSection = document.querySelector('.home');

    if (homeSection.getBoundingClientRect().bottom > 0) {

        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
}

// Événement pour détecter le défilement de la fenêtre et appeler la fonction
window.addEventListener('scroll', toggleNavbarVisibility);

// Appel initial de la fonction pour vérifier l'état du menu au chargement de la page
toggleNavbarVisibility();


const button = document.getElementById("my-button");
const nav = document.querySelector(".nav__list");

button.addEventListener('click', () => {
    nav.classList.toggle('show');
});




