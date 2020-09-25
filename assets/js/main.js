// const firstnames = ["John", "Jacob", "Eric", "Conroy", "Vincent", "Laurence", "Jack", "Harry", "Richard", "Michael", "Kevin", "Daniel", "Cody", "Brody", "Chase", "Cash", "Norman", "Trevor", "Todd", "Ellis", "Quentin", "Zachary", "Bruce", "Sam", "Horace", "George", "Tom", "Tim", "Wallace", "Walter", "Alex", "Alan", "Sean", "Seamus", "Dudley", "Duke", "Damian", "Nash", "Horton", "Robert", "Mitchell", ];


// let readMore = document.getElementById('recruit')

// readMore.onclick = function() {
//     event.preventDefault();
//     const firstname = firstnames[Math.floor(Math.random() * firstnames.length)];
//   }

let pageNumber = 0

const pages = [
    {copy: "Which emoji describes you mood right now?", background: "#FFD525"},
    {copy: "What do you need today to help focus on your task", background: "#FFD525"},
    {copy: "What will you be working on today?", background: "#FFD525"},
    {copy: "If you could be a celebrity for a day, who would it be", background: "#FFD525"},
    {copy: "If you were a super hero today, who would you be?", background: "#FFD525"}
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