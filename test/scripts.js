/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function toggleNav() {
    var sidenav = document.getElementById("mySidenav"),
    main = document.getElementById("main");
    sidenav.style.width = sidenav.style.width === "250px" ? '0' : '250px';
    main.style.marginRight = main.style.marginRight === "250px" ? '0' :  '250px';
  }