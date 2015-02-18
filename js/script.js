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
			// loop through all party characters and fiind one withh the same class
			for ( var i = 0; i < $(".added").length; i++){
				if($($(".added")[i]).find(".party-character-class").text() == $(this).find(".character-class").text() ){
					var lastCharacter = $($(".added")[i]);

					lastCharacter.removeClass("added");
					console.log(lastCharacter);

					charactersLeft += 1;
					$(".characters-left").text(charactersLeft);
					

					lastCharacter.find("img").attr("src", "");
					lastCharacter.find("img").attr("alt", "");
					lastCharacter.find(".party-character-class").text("");
					lastCharacter.find("label").text("");
					lastCharacter.find(".stat-points").text("");
					lastCharacter.find("input").val(0);
				}
			}
			
			



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
			var emptySpacePosition = maxCharaters - charactersLeft;
			currentEmptySpace = $($(".party-character")[emptySpacePosition]);

			currentEmptySpace.addClass("added");
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