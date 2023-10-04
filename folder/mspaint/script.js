var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d"),
	drawing = false;

canvas.width = 512;
canvas.height = 512;
ctx.lineCap = "round";



function draw(event){
	if (event.buttons & 1){
		ctx.beginPath();
		ctx.lineWidth = brushsize;
		ctx.moveTo(event.x-event.movementX, event.y-event.movementY);
		ctx.lineTo(event.x, event.y);
		ctx.stroke();
	}
}

function clampVal(num, min=null, max=null){
	if (min == null && max == null)
		throw("Error: min or max value required");

	if (max == null)
		return Math.max(num, min);

	if (min == null)
		return Math.mim(num, max);

	return Math.max(Math.min(num, max), min);
}

var brushsize = 5,
	bsizeNum = document.getElementById("brushsize");

bsizeNum.addEventListener("input", function(event){
	brushsize = bsizeNum.value;
})
canvas.addEventListener("wheel", function(event){
	if (event.deltaY < 0)
		brushsize = clampVal(brushsize+1, 1, 25);

	if (event.deltaY > 0)
		brushsize = clampVal(brushsize-1, 1, 25);

	bsizeNum.value = brushsize;
})
canvas.addEventListener("mousedown", draw, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseleave", draw, false);
canvas.addEventListener("mouseenter", function(){ctx.beginPath()}, false);



var color = document.getElementById("brushcolor");
color.addEventListener("input", function(event){
	ctx.strokeStyle = color.value;
})