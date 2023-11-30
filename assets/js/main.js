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
/*fonction pour changer le couleur de l element active du menu*/
const navElements = document.querySelectorAll(".nav__link");
navElements.forEach(element => {
   
    element.addEventListener('click',(event)=>
    {
        navElements.forEach(item => {
            item.classList.remove('active-link');
        });
        event.target.classList.add("active-link");

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

