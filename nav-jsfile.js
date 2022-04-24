
function openNav() {
    //document.getElementById("menu-display").style.display = "flex";
    document.getElementById("menu-display").style.width = "100%";
    document.getElementById("menu-display").style.left="0";
    

}

function closeNav() {
   // document.getElementById("menu-display").style.display = "none";
    document.getElementById("menu-display").style.width = "0%";
    document.getElementById("menu-display").style.left="-800%";
    
}
    



//media queries for 500px
function myFunction(x) {
  if (x.matches) {
    document.getElementById("nav").style.backgroundColor = "var(--darkblue)";
  }
}

var x = window.matchMedia("(max-width: 500px)")
myFunction(x)
x.addListener(myFunction) 





//media queries for 800px
function myFunction(y) {
  if (y.matches) {
    document.getElementById("nav").style.backgroundColor = "var(--darkblue)";
  }
}

var y = window.matchMedia("(max-width: 800px)")
myFunction(y)
y.addListener(myFunction) 







window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.backgroundColor="var(--darkblue)";
  }
  else if(x.matches || y.matches){
      document.getElementById("nav").style.backgroundColor="var(--darkblue)";
  }
  else{
      document.getElementById("nav").style.backgroundColor="transparent";
  }    
}













