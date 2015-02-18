function addCharTemplate(selector, character, statsLimit){
	selector.append(
		'<li class="'+character._class+'">'+
		'<img src="'+ character.img + '" alt="' +character._class +'" class="charImg small-6 columns">'+
		'<div class="small-6 columns">'+
		  
		  '<input type="text"placeholder="Name">'+
		  '<h5 class="charClass">' + character._class + '</h5>'+
		'</div>'+
		'<div class="stats-container small-12 columns">'+
		  '<h5 class="toSpentPoints">Points to spend: <span class="remainingPoints">' + statsLimit + '</span></h5>'+
		  '<label for="" class="small-6 columns">' + character.stat1 + '</label>'+
		  '<input type="number" vaule="0" class="stat stat1 small-6 columns">'+
		  
		  '<label for="" class="small-6 columns">'+character.stat2 +'</label>'+
		  '<input type="number" vaule="0" class="stat stat2 small-6 columns">'+

		  '<label for="" class="small-6 columns">' + character.stat3 + '</label>' +
		  '<input type="number" vaule="0" class="stat stat3 small-6 columns">'+
		  '<button class=" tiny right setCharacter">finish</button>'+
		'</div>'+
		'</li>'

	);
	
}

function removeCharTemplate(selector, _class){
	selector.find('.'+_class).remove();
}