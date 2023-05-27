import Fps from "./Fps";
import Player from "./Player";

var canvas;
var ctx;
var baseCanvasWidth = 640;
var baseCanvasHeight = 480;
var fullscreen = true;

let angle = 0;
let speed = 0.05;

let player;
let fpsCounter;

function init()
{
    canvas = document.getElementById( 'canvas' );
    ctx = canvas.getContext( '2d' );

    window.addEventListener( "resize" , windowSizeChanged );

    resizeCanvas();

    initParams();

    tick();
}

function initParams() {
    player = new Player();
    fpsCounter = new Fps({ canvasWidth: canvas.width / 2 });
}

function draw()
{
    ctx.clearRect( 0 , 0 , canvas.width , canvas.height );
    
    const y = Math.sin(angle) * 100;
    angle += speed;

    for (let i = 0; i < 100; i++) {
        drawLine( ctx , 100 + i * y , y , 0 , 1000 );
    }

    player.update({ c: ctx });


    fpsCounter.update({ c: ctx });
}

function tick() 
{ 
    requestAnimationFrame( tick );

    draw();
}

function windowSizeChanged()
{
    resizeCanvas();
    initParams();
}

function resizeCanvas()
{
    console.log( "devicePixelRatio: "+window.devicePixelRatio );
    console.log( "canvas size: "+canvas.width+" x "+canvas.height );
    console.log( "canvas style size: "+canvas.style.width+"px x "+canvas.style.height+"px" );

    if ( fullscreen )
    {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        console.log( "window size: "+windowWidth+" x "+windowHeight );

        canvas.width = Math.floor( windowWidth * window.devicePixelRatio );
        canvas.height = Math.floor( windowHeight * window.devicePixelRatio );

        canvas.style.width = windowWidth+"px";
        canvas.style.height = windowHeight+"px";
    }
    else 
    {
        canvas.width = Math.floor( baseCanvasWidth * window.devicePixelRatio );
        canvas.height = Math.floor( baseCanvasHeight * window.devicePixelRatio );

        canvas.style.width = baseCanvasWidth+"px";
        canvas.style.height = baseCanvasHeight+"px";
    }

    ctx.scale( window.devicePixelRatio , window.devicePixelRatio );

    console.log( "new canvas size: "+canvas.width+" x "+canvas.height );
    console.log( "new canvas style size: "+canvas.style.width+"px x "+canvas.style.height+"px" );
}

function drawLine( ctx , x1 , y1 , x2 , y2 )
{
    ctx.beginPath();
    ctx.moveTo( x1+0.5 , y1+0.5 );
    ctx.lineTo( x2+0.5 , y2+0.5 );
    ctx.stroke();
}

init();