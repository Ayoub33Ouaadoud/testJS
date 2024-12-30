function changeMessage() {
    const messageElement = document.getElementById("welcome-message");
    const timeElement = document.getElementById("time-of-day");

    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
        messageElement.textContent = "Bonjour !";
        timeElement.textContent = "Il est " + currentHour + " heures du matin.";
    } else if (currentHour >= 12 && currentHour < 18) {
        messageElement.textContent = "Bon après-midi !";
        timeElement.textContent = "Il est " + currentHour + " heures de l'après-midi.";
    } else {
        messageElement.textContent = "Bonsoir !";
        timeElement.textContent = "Il est " + currentHour + " heures du soir.";
    }
}
