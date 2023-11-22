const switchStyleToggle = document.querySelector(".style__switch-toggle");
switchStyleToggle.addEventListener("click", () => {

    document.querySelector(".style__Switch").classList.toggle("open");

})

window.addEventListener("scroll",()=>{
    if(document.querySelector(".style__Switch").classList.contains("open"))
    {
        document.querySelector(".style__Switch").classList.remove("open")
    }
})

/* Theme colors */

const switchStyleElms = document.querySelectorAll(".styleSwich");
console.log(switchStyleElms);
function setActiveStyle(color)
{
    switchStyleElms.forEach((style)=>
    {

        if(color==style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    }
)};

