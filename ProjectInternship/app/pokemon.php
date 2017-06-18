<?php $id = $_GET['id']; ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<table id="table" summary="Pokemony lista" class="display" width="100%">
	<caption>Pokemon Detail</caption>
  <thead>

  </thead>
  <tbody>

  </tbody>
  <tfoot>
  
	</tfoot>
</table>



 <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
 <script src="js/skrypt2.js"></script>

<script>
    getPokemonById(<?php echo $id ?>);
</script>
</body>
</html>