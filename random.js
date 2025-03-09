const links = [
    "harold.html"
];
function randlink() {
    const ra = Math.floor(Math.random() * links.length);
    return links[ra];
}
