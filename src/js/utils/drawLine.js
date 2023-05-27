export default function drawLine( ctx , x1 , y1 , x2 , y2 ) {
    ctx.beginPath();
    ctx.moveTo( x1+0.5 , y1+0.5 );
    ctx.lineTo( x2+0.5 , y2+0.5 );
    ctx.stroke();
}