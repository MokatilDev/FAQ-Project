const Question = document.querySelectorAll(".Question")
const Anwsor = document.querySelector(".Anwsor")
const Question1 = document.querySelector(".Question1")


let x = 2
Question.forEach(element =>{
    element.addEventListener("click",()=>{
        element.children[1].classList.toggle("active")
        element.nextElementSibling.classList.toggle("active")
    })
})

Question1.addEventListener("click",()=>{
    if(x%2 == 0){
        Question1.style.borderBottom = "1px solid var(--Boder)"
    }else{
        Question1.style.borderBottom = "0"
    }
    x++
})