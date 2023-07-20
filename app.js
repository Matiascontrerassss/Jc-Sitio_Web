let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("navegacion").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("navegacion").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("navegacion").classList = "";
    menuVisible = false;
}