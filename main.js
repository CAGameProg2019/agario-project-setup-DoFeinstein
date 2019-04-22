let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth - 20;
canvas.height= window.innerHeight - 20;

const FOOD_COUNT = 200;

let mpos;

let player;
let foods = [];

let colors = [
    '#029CAF',
    '#E4D499',
    '#FFC118',
    '#EF7C18',
    '#E22450'

];
let strokeColors = [
    '#016F7D',
    '#B0A376',
    '#CC9A12',
    '#BD6213',
    '#B01C3F'
];

function randomColor(){
    let index =Math.floor(Math.random() * colors.length);
    return colors[index];
}

function generateFood() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let color = randomColor();

    foods.push(new Food(x, y, 8, color));
}

function init() {
    mpos = new Vector(canvas.width/2, canvas.height/2);
    let name = prompt("Input Username: ");

    let color = randomColor();
    let stroke = strokeColors[colors.indexOf(color)];


    player = new Player(canvas.width/2, canvas.height/2, 25, color, stroke, name, 4);


    for (var i = 0; i < FOOD_COUNT; i++) {
        generateFood();


    }
    update();
}

function update() {
    c.clearRect(0,0,canvas.width, canvas.height);
    for (var i = 0; i < foods.length; i++) {
        let eaten = player.intersects(foods[i]);
        if (!eaten) {
            foods[i].draw(c);
        } else {
            player.addMass(foods[i].mass);
            foods.splice(i,1);
            i--;
        }

    }

    while (foods.length < FOOD_COUNT){
        generateFood();
    }

    player.draw(c);
    player.update(mpos)





    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    init();

    window.addEventListener('mousemove', function(event){
        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;

    });
});
