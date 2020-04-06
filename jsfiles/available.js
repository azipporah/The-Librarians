
//dropdown menu
function myDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myPrompt(){
    
    let userRole = prompt("Please Enter password");
    switch(userRole){
        case "edu lf":
            alert ("Logged in as LF");
            window.location = "delete.html";
            break;
       
            default:
                alert ("Permission Denied");    
    }
}

