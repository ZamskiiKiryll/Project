var arrow1 = document.getElementsByClassName("col-2 imgleft");
var arrow2 = document.getElementsByClassName("col-2 imgright");
var picture = document.getElementsByClassName("pic");
var i = 0;
var slid = document.getElementsByClassName("slide");

function picLeft() {
  picture[i].className = "pic";
  i--;
  if (i < 0) {
    i = picture.length - 1;
  }
  picture[i].className = "pic active";
}

function picRight() {
  picture[i].className = "pic";
  i++;
  if (i >= picture.length) {
    i = 0;
  }
  picture[i].className = "pic active";
}
