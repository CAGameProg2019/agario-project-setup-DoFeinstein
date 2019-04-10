let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth - 20;
canvas.height= window.innerHeight - 20;

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

function randomColor(){
    let index =Math.floor(Math.random() * colors.length);
    return colors[index];
}

function init() {

    mpos = new Vector(canvas.width/2, canvas.height/2);

    player = new Player(canvas.width/2, canvas.height/2, 25, randomColor());


    for (var i = 0; i < 200; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color = randomColor();

        foods.push(new Food(x, y, 8, color));


    }
    update();
}

function update() {
    c.clearRect(0,0,canvas.width, canvas.height);
    for (var i = 0; i < foods.length; i++) {

        foods[i].draw(c);
    }

    player.draw(c);
    player.x = mpos.x;
    player.y = mpos.y;


    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    init();

    window.addEventListener('mousemove', function(event){
        mpos.x = event.clientX - canvas.offsetLeft;
        mpos.y = event.clientY - canvas.offsetTop;
        console.log(mpos.toString());
    });
});
