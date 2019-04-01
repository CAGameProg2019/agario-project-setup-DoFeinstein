let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

function init() {
alert("hello world");
c.fillStyle= "red";
c.fillRect(50,50,100,100);
    update();
}

function update() {


    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    init();
});
