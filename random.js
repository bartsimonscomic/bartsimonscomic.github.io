const links = [
    "./harold.html",
    "./haroldsequel.html",
    "./playship.html"
];
function randlink() {
    const ra = Math.floor(Math.random() * links.length);
    return links[ra];
}
document.getElementById('radd').addEventListener('click', function() {
    const randomLink = randlink();
    window.location.href = randomLink; // Redirect to the random link
});
