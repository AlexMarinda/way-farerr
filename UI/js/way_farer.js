function addRow() {
          
  var orig = document.getElementById("orig");
  var dest = document.getElementById("dest");
  var datee = document.getElementById("datee");
  var table = document.getElementById("customers");

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  
  row.insertCell(0).innerHTML= orig.value;
  row.insertCell(1).innerHTML= dest.value;
  row.insertCell(2).innerHTML= datee.value;
  row.insertCell(3).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';

}

function deleteRow(obj) {
    
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("customers");
  table.deleteRow(index);
  
}

