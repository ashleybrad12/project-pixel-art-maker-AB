
$(document).ready(function() { // Document is loaded

var height = $('#inputHeight').val(); // get the height value
var width = $('#inputWidth').val(); // get the width value
var table = $('#pixelCanvas');   // get the table object
// Create the blur events
$('#inputHeight').change(function(event) {   // update the table object when height value is changed
     height = event.target.value;
    if(height > 1 && width > 1) {
        makeGrid(table, height, width);
    }
});
$('#inputWidth').change(function(event) { // update the table object when width value is changed
    width = event.target.value;
    if(width > 1 && height > 1) {
        makeGrid(table, height, width);
    }
});
$('#submitForm').on("click",function(event) { //resets grid when submit button is clicked again
           if (event.detail==1){
               makeGrid(table, height, width);
           }
            else {
        $('#inputHeight').val(1); 
          $('#inputWidth').val(1);
           $('table tr').remove();
        }
           
    });
});

function makeGrid(table, height, width) {  //making the grid and adding color to the boxes
    var colCount = height;
    var rowCount = width;
    var strHtml = ''; 
    
    for(var i=1; i <= rowCount; i++) {
        strHtml += '<tr>';
        for(var x=1; x <= colCount; x++) {
            strHtml += '<td class=colorCell></td>';
        }
        strHtml += '</tr>';        
    }    
   table[0].innerHTML = strHtml;
   $('.colorCell').click(function(event) {
        var color = $('#colorPicker').val();
        event.target.bgColor = color;
    });
}
