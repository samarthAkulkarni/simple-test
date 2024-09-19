document.getElementById('playButton').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    video.play();
})


first_page = document.querySelector(".intro-page");
second = document.querySelector(".q-1");
third = document.querySelector(".q-2");
fourth = document.querySelector(".q-3");
fifth = document.querySelector(".q-4");
final = document.querySelector(".final-page");


function change1(){
    first_page.classList.add("none");
    second.classList.remove("none")
}

function change2(){
    second.classList.add("none");
    third.classList.remove("none")
}

function change3(){
    third.classList.add("none");
    fourth.classList.remove("none")
}

function change4(){
    fourth.classList.add("none");
    fifth.classList.remove("none")
}

function change5(){
    fifth.classList.add("none");
    final.classList.remove("none")
}