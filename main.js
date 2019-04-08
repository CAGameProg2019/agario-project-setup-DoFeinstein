let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

let foods = [];
var i = 0
let colors = [
    'blue',
    'green',
    'red',
    'pink',
    'orange',
    'purple',
    'teal'
];

function randomColor(){
    let index =Math.floor(Math.random() * colors.length);
    return colors[index];
}

function init() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let color = randomColor();
for (var i = 0; i < 100; i++) {
    foods.push(new Food(x, y, 20, color));


}
    update();
}

function update() {
    c.clearRect(0,0,canvas.width, canvas.height);
    for (var i = 0; i < foods.length; i++) {

        foods[i].update();
    }


    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    init();
});
;
