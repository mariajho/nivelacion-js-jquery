$(document).ready( function(){
	//oculta flecha
	$(".home .js-back").hide();
	//oculta menu
	$(".make .js-menu").hide();


//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
renderHighlightedRecipes(recipesArray);	

	//Imprimir recetas
	function texto(){
		$("#printNews").append("<p>NUEVAS RECETAS</p>");
	};
	texto();

});




/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray){
	for(var i = 0; i<recipesArray.length; i++){//recorre
		if(highlighted == true);//condición
		return (renderRecipes(recipesArray));
		console.log('Recipes: ', recipesArray);
	}
};





/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
/*function renderRecipe(recipe) {
	$(".list-recipes").append("<a class="item-recipe" href="#">");
	<span class="attribution">
	<span class="title-recipe"> + title</span>
	<span class="metadata-recipe">
	<span class="author-recipe"> + source.name</span>
	</span>
	</span>
	</span>
	 <img src="img/recipes/640X480">
</a>

};*/
/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {	
}

