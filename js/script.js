$(document).ready(function(){

	// función que acciona la selección de personajes
	$(".character").on("click", function(){
		

		
		// si tiene la clase active, borra al PJ
		if ($(this).hasClass("active")){
			var _class = $(this).find(".character-class");
			// remove the class from the party
			// TODO



		}
		// si no tiene la clase active genera al PJ
		else if(!$(this).hasClass("active")){
			var character = {}
			character._class = $(this).find(".character-class").text();
			character.stat1 = $(this).find(".stat1").text();
			character.stat2 = $(this).find(".stat2").text();
			character.stat3 = $(this).find(".stat3").text();
			character.img = $(this).find("img").attr("src");
			console.log(character);
		};

		
		



		


		$(this).toggleClass("active");
	});
});