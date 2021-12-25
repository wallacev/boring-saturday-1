let spritesheet;
let spritedata;
let animation = [];
let archer
let archers = [];

function preload() {
    spritedata = loadJSON('sprite/archer.json');
    spritesheet = loadImage('sprite/archer.png');
}

function setup() {
    createCanvas(1780, 780);

    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++) {
        let pos = frames[i].position;
        let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img);
    }
    for (let i = 0; i < 100; i++) {

        archers[i] = new Sprite(animation, random(0.1, 0.5), i * 100, random(0, 640));
    }

}

function draw() {
    background(0);
    for (let archer of archers) {
        archer.show();
        archer.animate();
    }
}