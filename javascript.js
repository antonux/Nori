const envelope = document.querySelector(".env");
const env_container = document.querySelector(".con");
const letter = document.querySelector(".letter");
const hearts1 = document.querySelector(".hearts");
const hearts2 = document.querySelector(".hearts2");
const flower = document.querySelector(".flower");
const arrow = document.querySelector(".arrow");
const home = document.querySelector(".home");
const hvd = document.querySelector(".hvd");
const anim = document.querySelector(".anim");


function envelope1(x) {
    x.src = "images/envelope_close.png";
}

function envelope2(x) {
    x.src = "images/envelope_half_open.png"
}

envelope.addEventListener("click", () => {
    letter.classList.add("letter_click");
    hearts1.style.display = "block";
    hearts2.style.display = "block";
    flower.classList.add("rotate");
    hvd.classList.add("font_hvd");
});

arrow.addEventListener("click", () => {
    letter.classList.add("hidden");
    envelope.style.display = "none";
    hearts1.style.display = "none";
    hearts2.style.display = "none";
    env_container.style.display = "none";
    home.style.display = "block";
    home.classList.add("bounce");

    setTimeout(function() {
        home.classList.add("home_open");
    }, 1);
    setTimeout(function() {
        letter.style.display = "none";
    }, 3000);
});

home.addEventListener("click", () => {
    home.classList.remove("bounce");
    anim.style.height = "100%";
    anim.style.objectFit = "contain";
    home.style.width = "100vw";
    home.style.height = "100vh";
    home.style.borderRadius = "0";
    var audio = document.getElementById('myAudio');
    audio.play();
});


function getRandomColor() {
    // Generate a random hex color code
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function changeHeartColors() {
    var hearts = document.querySelectorAll('.heart');


    hearts.forEach(function(heart) {
        heart.style.backgroundColor = getRandomColor();
    });
}

function changeHeartColors2() {
    var hearts = document.querySelectorAll('.heart2');

    hearts.forEach(function(heart2) {
        heart2.style.backgroundColor = getRandomColor();
    });
}


  

//<img onmouseover="" draggable="false" src="images/envelope_close.png" alt="">
