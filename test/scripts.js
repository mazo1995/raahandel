window.onload=function(){

document.getElementById("openbtn").addEventListener("click", open_close);
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
var menuState = 1
function open_close() {
    if(menuState === 0){
    menuState = 1;    
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  }
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  else{
  menuState = 0;    
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
   }
   console.log(menuState);
}


}