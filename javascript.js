

window.onload = function(){

    alert("👋 Selamat Datang di Website GlowLab!");

}

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");

    let card = document.querySelectorAll(".card");

    card.forEach(function(item){

        item.classList.toggle("bg-secondary");
        item.classList.toggle("text-white");

    });

});


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


console.log("GlowLab berhasil dijalankan.");
