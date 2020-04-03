
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
    
    let userRole = prompt("Plaese Enter password");
    switch(userRole){
        case "edu lf":
            alert ("Logged in as LF");
            window.location = "add.html";
            break;
        case "staff":
            alert ("Logged in as Staff");
            window.location = 'add.html';
            break;
            default:
                alert ("Permission Denied");    
    }
}

var rIndex;
var table = document.getElementById("table");
function myFunction() {
  // Declare variables
  var input, filter, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

    //get the table by id
    //create a new row and cells
    //get values from input text
    //set values into row cells  
    
    // var container = document.getElementById("cont");
    // container.appendChild(table);

    function addingBook(){                                   
        var newRow = table.insertRow(table.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        var Title = document.getElementById("title").value;
        var Author = document.getElementById("author").value;
        var Price = document.getElementById("price").value;

        cell1.innerHTML = Title;
        cell2.innerHTML = Author;
        cell3.innerHTML = Price;

        bookRowToInput();
    }

    
   //getting row index
   function bookRowToInput(){
       
       for(var i = 1; i < table.rows.length; i++){
           
         table.rows[i].onclick = function(){
             //get the selected row index
            rIndex = this.rowIndex;
            document.getElementById("title").value = this.cells[0].innerHTML;
            document.getElementById("author").value = this.cells[1].innerHTML;
            document.getElementById("price").value = this.cells[2].innerHTML;
            
        };
       }
   }
   //call the function to set the event to the new row
   bookRowToInput();

   //edit a selected row
    function editSelectedRow(){
       var Title = document.getElementById("title").value;
       var Author = document.getElementById("author").value;
       var Price = document.getElementById("price").value;

       table.rows[rIndex].cells[0].innerHTML = Title;
       table.rows[rIndex].cells[1].innerHTML = Author;
       table.rows[rIndex].cells[2].innerHTML = Price;
   }

  //delete a row from a table
   function removeSelectedRow(){
       table.deleteRow(rIndex);
   }





