var
turn = document.getElementsByClassName("play-area"),
boxes = document.querySelectorAll("#main div"),
XorO = 0;// to set x or o into the box


for (var i = 0; i < boxes.length; i++) {
boxes[i].onclick = function () {

  if (this.innerHTML !== "X" && this.innerHTML !== "O") {
    // check if XorO equals zero the result will be x otherwise O
    if (XorO % 2 === 0) {
      console.log(XorO);
      this.innerHTML = "X";
      getWinner();
      XorO += 1;

    } else {
      console.log(XorO);
      this.innerHTML = "O";
      getWinner();
      XorO += 1;

    }
  }
}
}

function selectWinnerBoxes(b1, b2, b3 ) {
b1.classList.add("win");
b2.classList.add("win");
b3.classList.add("win");
var plaName = document.getElementById('player').value;
document.getElementById("winform").style.display="block";
document.getElementById("player_name").innerHTML="congrats "+ plaName +" you won" ;

}
function closeForm() {
document.getElementById("winform").style.display = "none";
}


function replay() {
for (var i = 0; i < boxes.length; i++) {
  boxes[i].classList.remove("win");
  boxes[i].innerHTML = "";
}

}

function getWinner() {
var box0 = document.getElementById("box0");//1
var box1 = document.getElementById("box1");//2
var box2 = document.getElementById("box2");//3
var box3 = document.getElementById("box3");//4
var box4 = document.getElementById("box4");//5
var box5 = document.getElementById("box5");//6
var box6 = document.getElementById("box6");//7
var box7 = document.getElementById("box7");//8
var box8 = document.getElementById("box8");//9

if (box0.innerHTML !== "" && box0.innerHTML === box1.innerHTML && box0.innerHTML === box2.innerHTML)
  selectWinnerBoxes(box0, box1, box2);
if (box3.innerHTML !== "" && box3.innerHTML === box4.innerHTML && box3.innerHTML === box5.innerHTML)
  selectWinnerBoxes(box3, box4, box5);
if (box6.innerHTML !== "" && box6.innerHTML === box7.innerHTML && box6.innerHTML === box8.innerHTML)
  selectWinnerBoxes(box6, box7, box8);
if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
  selectWinnerBoxes(box1, box4, box7);
if (box2.innerHTML !== "" && box2.innerHTML === box4.innerHTML && box2.innerHTML === box6.innerHTML)
  selectWinnerBoxes(box2, box4, box6);
if (box0.innerHTML !== "" && box0.innerHTML === box4.innerHTML && box4.innerHTML === box8.innerHTML)
  selectWinnerBoxes(box0, box4, box8);
if (box0.innerHTML !== "" && box0.innerHTML === box3.innerHTML && box3.innerHTML === box6.innerHTML)
  selectWinnerBoxes(box0, box3, box6);
if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML)
  selectWinnerBoxes(box2, box5, box8);
}