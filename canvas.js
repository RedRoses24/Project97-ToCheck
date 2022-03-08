var canvas=new fabric.Canvas('myCanvas');
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function(Img){
		block_image_object=Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		new_image('download.png');
		console.log("1");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		new_image('tip1-alphabets.jpg');
		console.log("2");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		new_image('tip1-alphabets.jpg');
		console.log("3");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		new_image('tip1-alphabets.jpg');
		console.log("4");
	}
	
}
function log_out(){
	localStorage.removeItem("username");
	localStorage.removeItem("room");
	window.location.replace("index.html");
}