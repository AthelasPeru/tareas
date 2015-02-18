$(document).ready(function(){
	var maxCharaters = 3;
	var charactersLeft = maxCharaters;
	var statsToSet = 10;


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

			// genera objeto character
			var character = {}
			character._class = $(this).find(".character-class").text();
			character.stat1 = $(this).find(".stat1").attr("value");
			character.stat2 = $(this).find(".stat2").attr("value");
			character.stat3 = $(this).find(".stat3").attr("value");
			character.img = $(this).find("img").attr("src");
			console.log(character);



			// add character to the party
			emptySpacePosition = maxCharaters - charactersLeft;
			currentEmptySpace = $($(".party-character")[emptySpacePosition]);

			currentEmptySpace.find(".stat-points").text(statsToSet);

			// agregamos la data
			currentEmptySpace.find("img").attr("src", character.img);
			currentEmptySpace.find("img").attr("alt", character._class);
			currentEmptySpace.find(".party-character-class").text(character._class);
			// tengo que hacerlo así y no con find porqué no logra reconocer el selector"ends with al usar find"
			$($("label[for$='stat1']")[emptySpacePosition]).text(character.stat1);
			$($("label[for$='stat2']")[emptySpacePosition]).text(character.stat2);
			$($("label[for$='stat3']")[emptySpacePosition]).text(character.stat3);

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