class Draggable {

    constructor(x,y){
        this.x = x;
        this.y = y;

        this.isOver = false;
        this.isDragging = false;

        this.width = 10;
        this.height = 10;
    }

    over() {

        if(mouseX > this.x - this.width &&
            mouseX < this.x + this.width &&
            mouseY > this.y - this.height &&
            mouseY < this.y + this.height) {

                this.isOver = true;
            }else {
                this.isOver = false;
            }
    }

    update() {
        if(this.isDragging) {
            this.x = mouseX + this.offsetX;
            this.y = mouseY + this.offsetY;
        }
    }

    show() {
        stroke(0);
        fill(0);
        ellipse(this.x, this.y, this.width, this.height);
    }

    pressed() {
        if(this.isOver) {
            this.isDragging = true;
            this.offsetX = this.x - mouseX;
            this.offsetY = this.y - mouseY;
        }
    }

    released() {
        console.log("released");

        this.isDragging = false;
    }
}