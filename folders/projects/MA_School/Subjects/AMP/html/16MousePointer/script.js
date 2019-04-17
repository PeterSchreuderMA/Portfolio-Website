const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas_width = canvas.width;
canvas_height = canvas.height;

centerw = canvas_width/2;
centerh = canvas_height/2;

let Arrow = new Image();
Arrow.src = "hand1.png";

let mouse = [0,0]

let titel_text = new draw_text(centerw, 50, "Mouse Pointer",50);

Arrow.addEventListener("load", ()=>
{
    update();
})

function update()
{
    context.clearRect(0,0,canvas_width,canvas_height);
    requestAnimationFrame(update);

    DrawArrow(centerw,centerh);

    titel_text.draw(context);
}

window.addEventListener("mousemove", function (ev)
{
    mouse[0] = ev.clientX;
    mouse[1] = ev.clientY;
})

function DrawArrow(_x,_y)
{
    var img = Arrow;

    var dx = mouse[0] - _x;
    var dy = mouse[1] - _y;

    var angle = Math.atan2(dy, dx);

    console.log(angle);
    context.save();
    context.translate(_x,_y);
    context.rotate(angle);
    context.drawImage(img,-0.05*img.width,-0.5*img.height);
    context.restore();
}

