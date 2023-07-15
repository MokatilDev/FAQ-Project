const Question = document.querySelectorAll(".Question")
const Anwsor = document.querySelector(".Anwsor")





Question.forEach(element =>{
    element.addEventListener("click",()=>{
        element.children[1].classList.toggle("active")
        element.nextElementSibling.classList.toggle("active")
    })
})
