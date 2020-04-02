//toggling of the working hours div 
function myHours() {
  var work = document.getElementById("time");
  if (work.style.display === "none") {
    work.style.display = "block";
  } else {
    work.style.display = "none";
    }
}

//shows the events and the new books.
function displayEvents(){
    document.getElementById("event").setAttribute("style","display:block");
}

function displayNew(){
    document.getElementById("new").setAttribute("style","display:block");
   
}

    //get the table by id
    //create a new row and cells
    //get values from input text
    //set values into row cells  
    var rIndex;
    var table = document.getElementById("table");

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




