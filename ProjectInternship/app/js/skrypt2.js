function getPokemonById(id) {

	var pokemonAPI = "http://pokeapi.co";
	$.getJSON(pokemonAPI + '/api/v1/pokemon/' + id)
		.done(function (pokemon) {
			console.log(pokemon);
			var row = '<tr>';
			row += '<td>' + pokemon.name + '</td>';
			row += '<td>' + pokemon.hp + '</td>';
			row += '<td>' + pokemon.speed + '</td>';
			row += '<td>' + pokemon.attack + '</td>';
			row += '<td>' + pokemon.defense + '</td>';

			row += '</tr>';

			$("#table > tbody").append(row);


		});
}
$(function () {


	
	
	var hrow = '<tr class="header">';
	hrow += '<th> Pokemon Name : </th>';
	hrow += '<th> HP: </th>';
	hrow += '<th> Speed: </th>';
	hrow += '<th> Attack: </th>';
	hrow += '<th> Defense: </th>';
	hrow += '</tr>';
	 $("#table > thead").append(hrow);
	

		
	var frow = '<tr class="footer">';
	frow += '<td> Pokemon Name : </td>';
	frow += '<td> HP: </td>';
	frow += '<td> Speed: </td>';
	frow += '<td> Attack: </td>';
	frow += '<td> Defense: </td>';
	frow += '</tr>';
	 $("#table > tfoot").append(frow);

		$('title').html('Dane o pokemonie');
	
	
});