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
		  '<div class="statValue small-4 columns">0</div>'+
              '<div class="statControls small-2 columns">'+
                '<div class="plus">+</div>'+
               '<div class="minus">-</div>'+
              '</div>'+
		  
		  '<label for="" class="small-6 columns">'+character.stat2 +'</label>'+
		  '<div class="statValue small-4 columns">0</div>'+
		    '<div class="statControls small-2 columns collapsed">'+
		    '<div class="plus">+</div>'+
		    '<div class="minus">-</div>'+
		    '</div>'+

		  '<label for="" class="small-6 columns">' + character.stat3 + '</label>' +
		  '<div class="statValue small-4 columns">0</div>'+
              '<div class="statControls small-2 columns">'+
                '<div class="plus">+</div>'+
               '<div class="minus">-</div>'+
              '</div>'+
		  '<button class=" tiny right setCharacter">finish</button>'+
		'</div>'+
		'</li>'

	);
	
}

function removeCharTemplate(selector, _class){
	selector.find('.'+_class).remove();
}

