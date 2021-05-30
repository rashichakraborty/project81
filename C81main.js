var canvas= document.getElementById("myCanvas")
var pen= canvas.getContext("2d")

pen.beginPath();
pen.strokeStyle= "grey";
pen.lineWidth = 1;
pen.rect(150, 143, 430, 200);
pen.stroke();

pen.beginPath()
pen.strokeStyle="blue"
pen.lineWidth=5;
pen.arc(210,210,60,0,2*Math.PI)
pen.stroke()

pen.beginPath()
pen.strokeStyle="yellow"
pen.lineWidth=5;
pen.arc(280,280,60,0,2*Math.PI)
pen.stroke()

pen.beginPath()
pen.strokeStyle="black"
pen.lineWidth=5;
pen.arc(350,210,60,0,2*Math.PI)
pen.stroke()

pen.beginPath()
pen.strokeStyle="green"
pen.lineWidth=5;
pen.arc(425,280,60,0,2*Math.PI)
pen.stroke()

pen.beginPath()
pen.strokeStyle="red"
pen.lineWidth=5;
pen.arc(500,210,60,0,2*Math.PI)
pen.stroke()