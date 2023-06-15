let tele = document.querySelector(".tele");
let whats = document.querySelector(".whats");
let email = document.querySelector(".email");

tele.addEventListener('mouseover', () => {
    document.querySelector(".t").style.transform = 'translate(0%,-10%)';
});
tele.addEventListener('mouseout', () => {
    document.querySelector(".t").style.transform = 'translate(0%,10%)';
});


whats.addEventListener('mouseover', () => {
    document.querySelector(".w").style.transform = 'translate(0%,-10%)';
});
whats.addEventListener('mouseout', () => {
    document.querySelector(".w").style.transform = 'translate(0%,10%)';
});


email.addEventListener('mouseover', () => {
    document.querySelector(".e").style.transform = 'translate(0%,-10%)';
});
email.addEventListener('mouseout', () => {
    document.querySelector(".e").style.transform = 'translate(0%,10%)';
});