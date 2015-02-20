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
			// borramos al PJ
			removeCharTemplate($(".party-container ul"), $(this).find(".character-class").text());


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


			// agregamos el PJ
			addCharTemplate($(".party-container ul"), character, statsToSet);

			

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
	

	// controles de + y -
	$(".party-container").on("click", ".plus",function(){
		
		
		var container = $(this).parents(".stats-container");
		
		var counter = $(this).parent().siblings(".toSpendPoints").find(".remainingPoints");
		console.log(counter);
		var spentPoints = statsToSet - parseInt($(this).parent().siblings(".toSpendPoints").find(".remainingPoints").text());
		if(spentPoints >= 0  && spentPoints <= 9){
			$(this).parent().prev().text(parseInt($(this).parent().prev().text()) + 1);
			for(var i = 0; i < container.find(".statValue").length; i++){
				// lo hago así ya que el constructor de Number transforma automáticamente el string en number y el"vacio" en 0
				var inputValue = new Number($(container.find(".statValue")[i]).text());
				
				
				console.log("mira:", spentPoints);

			}
			spentPoints++;
			
				/*console.log("gastados: ", spentPoints);
				console.log(statsToSet - spentPoints);*/
				container.find(".remainingPoints").text(parseInt(statsToSet) - parseInt(spentPoints));
		}
		else {
			alert("No more points to spend!!");
			container.find(".remainingPoints").text(parseInt(statsToSet) - parseInt(spentPoints));
		}

	});
	$(".party-container").on("click", ".minus", function(){
		var container = $(this).parents(".stats-container");
		var spentPoints = statsToSet - parseInt($(this).parent().siblings(".toSpendPoints").find(".remainingPoints").text());
		if(spentPoints < 10 && spentPoints > 0){
			var pointsBox = $(this).parent().prev();
			if ( parseInt(pointsBox.text()) > 0){
				pointsBox.text(parseInt($(this).parent().prev().text()) - 1);
				for(var i = 0; i < container.find(".statValue").length; i++){
					// lo hago así ya que el constructor de Number transforma automáticamente el string en number y el"vacio" en 0
					var inputValue = new Number($(container.find(".statValue")[i]).text());
					
					
					console.log("mira:", spentPoints);
				}
				spentPoints--;
				container.find(".remainingPoints").text(parseInt(statsToSet) - parseInt(spentPoints));
			} else {
				alert("That skill hans't got any asigned points");
			}
			
		} else {
			alert("All your points have been returned");
			container.find(".remainingPoints").text(parseInt(statsToSet) - parseInt(spentPoints));
		}
	})
});