	//this function will validate user input 
	function runner()
		{
			var x = document.getElementById("zip_input").value;
			var i = 0;
			for(i in x){
				if ( isNaN(parseInt(x[i])) )
				{
					alert ("Please enter a valid US zip code");
					document.getElementById("zip_input").value =" ";
					break;
				}
				if(x.length < 5)
				{
					alert ("Please enter a 5 digit US zip code");
					document.getElementById("zip_input").value =" ";
					break;
				}
				if(x.length == 0)
				{
					alert ("Please enter a 5 digit US zip code");
					document.getElementById("zip_input").value =" ";
					break;
				}
				if(x == " ")
				{
					alert ("Blank input! Please enter a 5 digit US zip code");
					document.getElementById("zip_input").value ="";
					break;
				}
			}
		
		}
	//event handler for runner function
	document.getElementById("submit_btn").addEventListener('click', runner(), false);


