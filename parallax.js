const parallax = doucment.getElementbyId("parallax");

window.addEventListener("scroll", function () {
    let offset = window.pageYoffset;
    parallax.style.backgroundPrositionY = offset * 10 + "px";

})