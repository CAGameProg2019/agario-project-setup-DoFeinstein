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

for (var i = 0; i < 100; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let color = randomColor();
    foods.push(new Food(x, y, 10, color));


}
    update();
}

function update() {
    c.clearRect(0,0,canvas.width, canvas.height);
    for (var i = 0; i < foods.length; i++) {

        foods[i].draw(c);
    }


    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    init();
});
;
