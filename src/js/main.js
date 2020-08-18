AOS.init();


// Ocultar - Mostrar Menú durante el scroll

let principal = window.pageYOffset; 

window.addEventListener("scroll", function() {
    let actual = window.pageYOffset;

    console.log(principal, actual)
    if(principal >= actual) {
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }
    else {
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }

    principal = actual;
})



// Menú


let menu = document.querySelectorAll('.menu')[0];
let activer = true;

document.querySelectorAll('.hambur')[0].addEventListener('click', function() {

    if (activer) {
        document.querySelectorAll('.hambur')[0].style.color = "#fff";
        activer = false;
    }
    else {
        document.querySelectorAll('.hambur')[0].style.color = "#000";
        activer = true;
    }
    menu.classList.toggle('show');

})


