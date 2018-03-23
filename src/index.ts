class Timey
{
    parent:HTMLElement;
    canvas:HTMLCanvasElement;
    constructor(id:string)
    {
        let canvas = document.createElement("canvas") as HTMLCanvasElement;
        let element = document.getElementById(id);
        element.appendChild(canvas);
        this.canvas = canvas;
        this.parent = element;
        window.addEventListener('resize', ()=>
        {
            this.resize();
        });

        this.resize();
    }

    resize()
    {
        let pixelratio = window.devicePixelRatio;
        let canvas = this.canvas;
        let parent = this.parent;
        this.canvas.width = parent.clientWidth * pixelratio;
        this.canvas.height = parent.clientHeight * pixelratio;
        this.canvas.style.width = parent.clientWidth + "px";
        this.canvas.style.height = parent.clientHeight + "px";
        this.draw();
    }

   

    draw()
    {
        let canvas = this.canvas;
        let ctx = this.canvas.getContext('2d');
        ctx.fillRect(0,0, canvas.width, canvas.height);

        ctx.fillStyle = "white";
        ctx.fillText("Hello world", 55, 55);
    }
} 