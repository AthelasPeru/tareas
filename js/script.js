$(document).ready(function(){
	var maxCharaters = 3;
	var charactersLeft = maxCharaters;
	var statsToSet = 10;


	// función que acciona la selección de personajes
	$(".character").on("click", function(){
		

		
		// si tiene la clase active, borra al PJ
		if ($(this).hasClass("active")){			
			// actualizamos el límite de PJ's
			charactersLeft += 1;
			$(".characters-left").text(charactersLeft);


		}
		// si no tiene la clase active genera al PJ
		else if(!$(this).hasClass("active") && charactersLeft > 0){

			// genera objeto character
			var character = {}
			character._class = $(this).find(".character-class").text();
			character.stat1 = $(this).find(".stat1").attr("value");
			character.stat2 = $(this).find(".stat2").attr("value");
			character.stat3 = $(this).find(".stat3").attr("value");
			character.img = $(this).find("img").attr("src");
			console.log(character);

			addCharTemplate($(".party-container li"), character);

			

			// actualizamos el límite de PJ's
			charactersLeft -= 1;
			$(".characters-left").text(charactersLeft);

			// repartición de puntos de stats
			// TODO hacer que reconozca en cual estoy trabajando

			
		} 
		else if(charactersLeft <= 0){
			alert("You have already selected 3 characters")
		}

		$(this).toggleClass("active");
	});

	$("input[type='number'").on("change", function(){
		
		console.log("cambié");
		
		
	});
});