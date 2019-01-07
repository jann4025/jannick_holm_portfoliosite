window.addEventListener("load", sidenVises);
 scroll();

function sidenVises() {
    console.log("Siden blev loadet uden issues");
    document.querySelector(".preload_home").style.display = "none";
}
