/* Wolumin w stacji C to WINDOWS
 Numer seryjny woluminu: 2C29-98F8

 Katalog: C:\xampp\htdocs\ProjectInternship

2017-06-18  20:12    <DIR>          .
2017-06-18  20:12    <DIR>          ..
2017-06-16  21:29    <DIR>          ajax
2017-06-18  20:12    <DIR>          app
2017-06-17  19:36    <DIR>          css
2017-06-18  20:12                 0 gulpfile.js
2017-06-17  14:34    <DIR>          img
2017-06-18  19:56             1ÿ159 index.html
2017-06-18  19:55               600 index2.html
2017-06-18  18:22    <DIR>          js
2017-06-18  20:10    <DIR>          node_modules
2017-06-18  20:10               255 package.json
2017-06-18  19:13               576 pokemon.php
               5 plik(¢w)              2ÿ590 bajt¢w
               8 katalog(¢w)  88ÿ172ÿ875ÿ776 bajt¢w wolnych*/
			   
"use strict";

//toworze recznie g³ówny plik konfiguracyjny gulpfile.js

var gulp = require("gulp");
var sass = require("gulp-sass"); 
//tworze œrodowisko obiekty gulp i sass zainstalowane w konsoli  samo "npm install --save dev" oraz "npm install-sass --save -dev" 

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//var minify = require('gulp-minify-css');

var browserSync = require("browser-sync").create();
//tworze œrodowisko z pakietu browser sync, ktora najpierw zainstalowalam w konsoli npm install browser-sync --save-dev
//tworze obiekt synchronizacji

//pakiet browser sync - synchronizuje mi zmiany z przegl¹darka samodzielnie
gulp.task("browserSync", function() {
	browserSync.init({
		server: {
			baseDir: "app"
		},
	})
});


gulp.task("sass", function(){		//ma nam kompilowac do sasa w momencie gdy sie zmieni cos w sasie
		  
		  return gulp.src("app/scss/**/*.scss")		// zwraca nam obiekt, podajemy Ÿródlo  na ta sciezke do kompilowania
			.pipe(sass())						//kompiluje do sassa
			.pipe(gulp.dest("app/css"))		//wyrzuc do folderu css (destination)
		  	.pipe(browserSync.reload({		//przeladuj uruchamia sie automatycznie przegladarka i to co 									//zmieniam zmienia sie w przegladarce
			  stream: true
		  }))

});

//gulp.task('css', function(){
 //  gulp.src("app/css/**/*.css")
 //  .pipe(concat('styles.css'))
 //  .pipe(minify())
 //  .pipe(gulp.dest("app/css/style2"));
//});

gulp.task("default",["css"],function(){
});


gulp.task("watch", ["browserSync", "sass"], function(){
	gulp.watch("app/scss/**/*.scss",["sass"]);	//sprawdzaj czy wystepuja jakies zmiany w pliku, sprawdza czy mzineilismy plik, jezeli zmienilismy to uruchamiamy sassa- czyli œledzenie pliku. sorawdza czy zrobiliœmy save - jak zrobilismy save tzn ze zmienilismy plik
	
});
