function Ticket(movieName, timeOfDay, age) {
    this.movieName = movieName;
    this.timeOfDay = timeOfDay;
    this.age = age;
}

Ticket.prototype.calculatePrice = function() {
    let basePrice = 12;
    if (movieName !== "first-release") {
        basePrice -= 2;
    }
    if (timeOfDay === "matinee") {
        basePrice -= 3;
    }
    if (age <= 60) {
        basePrice -= 4;
    }
    return basePrice;
}