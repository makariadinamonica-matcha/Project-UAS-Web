// ==========================================
// POPUP SAAT WEBSITE DIBUKA
// ==========================================

window.onload = function () {
    alert("👋 Selamat Datang di Website GlowLab!");
};


// ==========================================
// DARK MODE
// ==========================================

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function () {

    // Mengubah tema
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");

    // Mengubah warna card
    document.querySelectorAll(".card").forEach(function(card){
        card.classList.toggle("bg-secondary");
        card.classList.toggle("text-white");
    });

    // Mengubah emoji dan tulisan tombol
    if(document.body.classList.contains("bg-dark")){
        darkBtn.innerHTML = "☀️ Light Mode";
    }else{
        darkBtn.innerHTML = "🌙 Dark Mode";
    }

});


// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ==========================================
// JQUERY
// ==========================================

$(document).ready(function(){


    // =========================
    // HIDE
    // =========================
    $("#btnHide").click(function(){
        $("#about").hide(1000);
    });


    // =========================
    // SHOW
    // =========================
    $("#btnShow").click(function(){
        $("#about").show(1000);
    });


    // =========================
    // TOGGLE
    // =========================
    $("#btnToggle").click(function(){
        $("#about").toggle(1000);
    });


    // =========================
    // SLIDE UP
    // =========================
    $("#btnSlideUp").click(function(){
        $("#about").slideUp(1000);
    });


    // =========================
    // SLIDE DOWN
    // =========================
    $("#btnSlideDown").click(function(){
        $("#about").slideDown(1000);
    });


    // =========================
    // SLIDE TOGGLE
    // =========================
    $("#btnSlideToggle").click(function(){
        $("#about").slideToggle(1000);
    });


    // =========================
    // FADE OUT
    // =========================
    $("#btnFadeOut").click(function(){
        $("#about").fadeOut(1000);
    });


    // =========================
    // FADE IN
    // =========================
    $("#btnFadeIn").click(function(){
        $("#about").fadeIn(1000);
    });


    // =========================
    // FADE TOGGLE
    // =========================
    $("#btnFadeToggle").click(function(){
        $("#about").fadeToggle(1000);
    });


});
