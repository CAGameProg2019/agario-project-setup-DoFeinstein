class Vector {

    constructor(x, y) {
        this.x = x;
        this.y = y;

    }

    addVector(vec){
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }

    subVector(vec){
        this.x -= vec.x;
        this.y -= vec.y;

    }
    scale(s){
        this.x *= s;
        this.y *= s;
    }

    dist(vec){
        let x = vec.x-this.x;
        let y = vec.y-this.y;
        return Math.sqrt(x*x + y*y);
    }

    toString(){
        return '<'+this.x+', ' + this.y+'>';
    }


}
