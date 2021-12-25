class Sprite {
    constructor(animation, speed, x, y,) {
        this.x = x;
        this.y = y;
        this.animation = animation;
        this.len = this.animation.length;
        this.speed = speed;
        this.index = 0;
    }
    show() {
        let index = floor(this.index) % this.len;
        image(animation[index], this.x, this.y)
    }
    animate() {
        this.index += this.speed;
        this.x += this.speed * 5;
        if (this.x > width) {
            this.x = -this.animation[0].width;
        }
    }
}