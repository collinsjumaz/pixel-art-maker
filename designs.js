// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


   function makeGrid() {
	console.log("makeGrid is running!")
	
	// Select size input
	
	var height, width, rows, canvas, cell;
	
	canvas = $('#pixel_canvas');
	height = $('#input_height').val();
	width = $('#input_width').val();
	
	canvas.children().remove()
	
	for (x = 0; x < height; x++) {
	canvas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (i = 0; i < width; i++) {
	rows.append('<td></td>');
	} 
	
	cell = canvas.find('td');
	
	// function  for changing cell color on click
	cell.click(function() {
		
		console.log("changeColor is running!");
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}
// When size is submitted by the user, call makeGrid()


var submitQuery;

submitQuery = $('input[type="submit"]')

	submitQuery.click(function(event) {
 		 event.preventDefault();
  	makeGrid();
});