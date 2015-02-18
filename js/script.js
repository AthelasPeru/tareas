$(document).ready(function(){

	var charactersLeft = 3;

	// función que acciona la selección de personajes
	$(".character").on("click", function(){
		

		
		// si tiene la clase active, borra al PJ
		if ($(this).hasClass("active")){
			var _class = $(this).find(".character-class");
			// remove the class from the party
			// TODO

			charactersLeft += 1;
			$(".characters-left").text(charactersLeft);

		}
		// si no tiene la clase active genera al PJ
		else if(!$(this).hasClass("active") && charactersLeft > 0){
			var character = {}
			character._class = $(this).find(".character-class").text();
			character.stat1 = $(this).find(".stat1").attr("value");
			character.stat2 = $(this).find(".stat2").attr("value");
			character.stat3 = $(this).find(".stat3").attr("value");
			character.img = $(this).find("img").attr("src");
			console.log(character);

			charactersLeft -= 1;
			$(".characters-left").text(charactersLeft);
		} 
		else if(charactersLeft <= 0){
			alert("You have already selected 3 characters")
		}

		
		



		


		$(this).toggleClass("active");
	});
});