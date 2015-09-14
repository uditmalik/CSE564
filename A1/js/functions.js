// add all js functions to this file

function validateInput() {
    		var x = document.getElementById("search").value;      
    		if (isNaN(x)) 
			alert("Input must be a number");
    		else if (x<=0 || x==null) 
			alert("Input must be greater than zero or not null");
	}
