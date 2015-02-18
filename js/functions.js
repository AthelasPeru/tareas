function addCharTemplate(selector, character){
	selector.html(
		'<img src="'+ character.img + '" alt="' +character._class +'" class="charImg small-6 columns">'+
		'<div class="small-6 columns">'+
		  
		  '<input type="text"placeholder="Name">'+
		  '<h5 class="charClass">' + character._class + '</h5>'+
		'</div>'+
		'<div class="stats-container small-12 columns">'+
		  '<h5 class="toSpentPoints">Points to spend: <span class="remainingPoints">' + 10 + '</span></h5>'+
		  '<label for="" class="small-6 columns">' + character.stat1 + '</label>'+
		  '<input type="number" class="small-6 columns">'+
		  
		  '<label for="" class="small-6 columns">'+character.stat2 +'</label>'+
		  '<input type="number" class="small-6 columns">'+

		  '<label for="" class="small-6 columns">' + character.stat3 + '</label>' +
		  '<input type="number" class="small-6 columns">'+
		  '<button class=" tiny right setCharacter">finish</button>'+
		'</div>'

	);
	
}