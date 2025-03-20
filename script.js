gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1.5 });
gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 2, delay: 0.5 });

const dynamicText = ["Building Scalable Solutions...", "Creating Next-Gen Web Experiences...", "Innovating with AI & Machine Learning..."];
let index = 0;
function typeEffect() {
    document.getElementById("dynamic-text").textContent = dynamicText[index];
    index = (index + 1) % dynamicText.length;
}
setInterval(typeEffect, 3000);

gsap.to(".project-slider", {
    x: -500,
    duration: 2,
    scrollTrigger: {
        trigger: "#projects",
        start: "top center",
        scrub: true
    }
});

document.querySelectorAll('.progress').forEach(skill => {
    let percent = skill.getAttribute('data-percent');
    gsap.to(skill, { width: percent + "%", duration: 2 });

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message Sent Successfully!");

});
