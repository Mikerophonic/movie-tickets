function Ticket(movieName, timeOfDay, age) {
    this.movieName = movieName;
    this.timeOfDay = timeOfDay;
    this.age = age;
}

Ticket.prototype.calculatePrice = function() {
    let basePrice = 12;
    if (this.movieName !== "first-release") {
        basePrice -= 2;
    }
    if (this.timeOfDay === "matinee") {
        basePrice -= 3;
    }
    if (this.age >= 60) {
        basePrice -= 4;
    }
    return basePrice;
}



//UI Logic

function handleFormSubmission(event) {
    event.preventDefault();
    const inputtedMovieName = document.getElementById("movie-select").value;
    const inputtedTimeOfDay = document.querySelector('input[name="time"]:checked').value;
    const inputtedAge = document.getElementById("age").value;
    const ticket = new Ticket(inputtedMovieName, inputtedTimeOfDay, inputtedAge);
    const ticketPrice = ticket.calculatePrice();
    const totalDiv = document.getElementById("total");
    totalDiv.innerHTML = `$${ticketPrice}`;
}

window.addEventListener("load", function (){
    document.querySelector("button").addEventListener("click", handleFormSubmission);
});