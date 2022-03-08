// Get the modal
var modal = document.getElementById("modal");
    
// Get the button that opens the modal
var btn = document.getElementById("myImg");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
username=localStorage.getItem("username");
password=localStorage.getItem("password");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqj-xSBNodyER_FGwKX8dDXF_FWqU2vZM",
  authDomain: "sign-language-67a97.firebaseapp.com",
  databaseURL: "https://sign-language-67a97-default-rtdb.firebaseio.com",
  projectId: "sign-language-67a97",
  storageBucket: "sign-language-67a97.appspot.com",
  messagingSenderId: "893751729530",
  appId: "1:893751729530:web:f8e2f029b483552d940ac3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
  function log_out(){

    localStorage.removeItem("username");
    localStorage.removeItem("room");
    window.location="index.html";
}

function addcomment(){
comment=document.getElementById("add_btn").value;
firebase.database().ref("/").child(comment).update({
      purpose:"adding comment"
});
localStorage.setItem("add_btn", comment);
window.location="page2.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
  console.log("room name"+Room_names);
  row="<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
 //End code
 });});}
 
function ShowAndHide() {
    var x = document.getElementById('SectionName');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function more(){
  var x = document.getElementById('videos');
  if (x.style.display == 'none') {
      x.style.display = 'block';
  } else {
      x.style.display = 'none';
  }
}

var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
var width=screen.width;
new_width=screen.width-60;
new_height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", start);
function start(e){
    console.log("Touch Started");
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", move);
function move(e){
    console.log("Touch is moving");
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("Last position of x and y coordinates= ");
    console.log("x= "+ last_position_of_x + "y= " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    console.log("Current position of x and y coordinates= ");
    console.log("x= " + current_position_of_touch_x + "y= " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}
function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }