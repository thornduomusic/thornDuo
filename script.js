
document.addEventListener('contextmenu', event => event.preventDefault());

let x = document.getElementById("myTopnav");
let y = document.querySelector(".sidenav")


function myFunction() {
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

let main = document.getElementById("main")
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
if (x) {
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  x.style.visibility = "hidden";
  y.style.visibility = "visible";
  main.style.visibility = "visible";

  //  document.createElement("p");
  // some code.. 
}
  } else {
    if (x) {
    console.log("who")
    x.style.visibility = "visible";
    y.style.visibility = "hidden";
    main.style.visibility = "hidden"
    }
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


  function backToWorksFunction() {
    if (document.referrer == (window.location.origin + "/works.html")) {
      history.back()
    } else {
      window.location = "works.html"
    }
  }

  function backToRnp() {
    if (document.referrer == "rnp.html") {
      history.back()
    } else {
      window.location = "rnp.html"
    }
  }

