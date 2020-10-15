
let pageNumber = 0

const pages = [
    {copy: "Which emoji describes you mood right now?", background: "#eeeeee"},
    {copy: "What do you need today to help focus on your task", background: "#eeeeee"},
    {copy: "What will you be working on today?", background: "#eeeeee"},
    {copy: "If you could be a celebrity for a day, who would it be", background: "#eeeeee"},
    {copy: "If you were a super hero today, who would you be?", background: "#eeeeee"}
]

const checkInTag = document.querySelector(".button-check-in")
const outputTag = document.querySelector(".output-check-in p")
const randomTag = document.querySelector(".button-check-in")


const randomCheckIn = function () {
    pageNumber = Math.floor(Math.random() * pages.length)

    updateCheckIn()
}

const updateCheckIn = function () {
    outputTag.innerHTML = pages[pageNumber].copy
    outputTag.style.backgroundColor = pages[pageNumber].background
}

randomTag.addEventListener("click", function () {
    randomCheckIn()
})

const checkInQuestions = [
    {copy: "Which emoji describes you mood right now?", background: "#eeeeee"},
    {copy: "What do you need today to help focus on your task", background: "#eeeeee"},
    {copy: "What will you be working on today?", background: "#eeeeee"},
    {copy: "If you could be a celebrity for a day, who would it be", background: "#eeeeee"},
    {copy: "If you were a super hero today, who would you be?", background: "#eeeeee"}
]


const checkinButton = document.querySelector('.button-check-out')




let stepsButton = document.querySelectorAll('.steps-button')
let stepsText = document.querySelectorAll('.steps-text')

stepsButton.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute("data-id")
      const text = document.querySelector(`.steps-text[data-text=${id}]`)
      text.classList.toggle("display-none")

      const arrow = document.querySelector(`.arrow[data-arrow=${id}]`)
      arrow.classList.toggle("rotate-arrow")
    })
  })


// stepsButton.addEventListener("click", function() {
//      stepsText.forEach(text, function() {
//         text.classList.toggle('steps-text')
//      })   
//  })




//1. Whenever we click a js-scroll kibj we want to run a function
//2. We want to stop the link from jumping straight to our section
//3. We want to find out the href attribute and then grab that element
//4. Then scroll to it using document.querySelctor('Day-3')scrollIntoView({ behavior: 'smooth' })

const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {

        event.preventDefault()
        
        const href = link.getAttribute('href')

        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        })

    })
})




document.addEventListener("scroll", function() {
    const topViewport = window.pageYOffset
    const midViewPort = topViewport + (window.innerHeight / 2)



    const sectionsParallax = document.querySelectorAll("section.parallax")

    sectionsParallax.forEach(section => {
        const topSection = section.offsetTop
        const midSection = topSection + (section.offsetHeight / 2)
        
        const tag = section.querySelector("div.square")
        
    })
})

const fadeHeader = function () {
    const heroTag = document.querySelector(".hero-page")
    const splashTag = document.querySelector("svg.splash")
    const pixels = window.pageYOffset
    const easing = function (x) {
        return x * x * x;
      }

    heroTag.style.opacity = 1 - easing(pixels / 500);
    splashTag.style.opacity = 1 - easing(pixels / 500);
}

window.addEventListener("scroll", function() {
    fadeHeader()
})



