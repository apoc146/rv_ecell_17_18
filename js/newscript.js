
var imgs = document.getElementsByClassName ("my-img"),
sections = document.getElementsByClassName ("mysection")
var x;

function unhover( x ) {
  imgs[x].src = 'img/Untitled1.jpg';
  sections[x].style.color = 'grey';

}
function hover(x) {
   imgs[x].src='img/Untitled-2.jpg';   
   sections[x].style.color = 'white';
}

