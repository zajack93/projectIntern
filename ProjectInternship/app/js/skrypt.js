$(function() {
	
	
	

    $("#images").pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'dark-theme'
    });
	var pokemonAPI = "http://pokeapi.co";
	
	var count = prompt("Ile pokemonów chcesz załadować? ");
	for (var i = 1; i <= count; i++) {
		// loop to getting n pokemons
		$.getJSON(pokemonAPI + '/api/v1/sprite/' + i)
			.done(function (sprite) {
				console.log(sprite);
				var row = '<tr class="item">';
				row += '<td>' + sprite.id + '</td>';
				row += '<td>' + sprite.pokemon.name + '</td>';
				row += '<td ><img src="' + pokemonAPI + sprite.image + '" id="img"/></td>';
				row += '<td><a href="' + pokemonAPI + sprite.resource_uri + '"> api.resource_uri </a></td>';
				row += '<td> <a href="index2.html">Click</span> </td>';

				row += '</tr>';

				$("#table > tbody").append(row);
			});
		 

		// hahaha
		$('title').html('Zlapane zostalo ' + i + ' pokemonow');
	}

	$( "div.second" ).replaceWith(count);

});



	//"dark-theme", 'light-theme', "compact-theme"
//<a href="https://www.w3schools.com/html/">