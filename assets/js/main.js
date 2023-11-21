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

document.addEventListener("click",(event)=>{
    if(event.target.classList.contains("work__button"))
    {
        OpenClosePortfolio();
        portfolioItemDetails(event.target.parentElement);
    }
});

document.querySelector(".portfolio__popup-close").addEventListener("click",OpenClosePortfolio);
//fonction pour ouvrir/ fermer le popup de chaque work du portfolio
function OpenClosePortfolio(){

    document.querySelector(".portfolio__popup").classList.toggle("open");

}
//changer le detail de chaque item du pop up selon le work choisi
function portfolioItemDetails(parentElement){
    console.log(parentElement.querySelector(".img__work"));

    document.querySelector(".pp__img img").src = parentElement.querySelector(".img__work").src;
   // document.querySelector(".pp__img img").src = parentElement.querySelector(".img__work").src;
    document.querySelector(".portfolio__popup-subtitle").innerHTML = parentElement.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = parentElement.querySelector(".portfolio__item-details").innerHTML;
}