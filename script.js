var score = 0;
var timer = 60;
var hitrn = 0;

function incScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function bubble() {
    var clutter = "";

    for (var i = 1; i <= 85; i++) {
        var r = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${r}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer() {
    var time = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML = "<h1>GAME OVER</h1>";
        }
    }, 1000);
}

function hitbble() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
        incScore();
        bubble();
        hitbble();
    }
    
});

hitbble();
runtimer();
bubble();
// incScore();
