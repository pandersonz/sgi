//atribute
let arrayCategory=[],
category = function() {
    this.name="",
    this.buttomn = [],
    this.inizialite = function(n,arrayButton){
        this.name = n;
        this.buttomn = arrayButton;
    }
};
//propiertis
let objCategory; 
let dataCategoryName = ["General","Areas"],
dataCategoryButton = [["procedimiento de gestion","Servicios Generales"],["Comercial","Administracion","Finanzas","Operacion","Control de riesgo"]];
//dataCategoryButton2 = ["Comercial","Administracion","Finanzas","Operacion","Control de riesgo"];
//main

$(document).ready(function() {
                                  
    $('#banner').bjqs({
      'animation' : 'slide',
      'width' : 700,
      'height' : 300
    });
    inizialiteArrayCategory()
    fullMenu();
});
function inizialiteArrayCategory(){
    for(let x=0;x<dataCategoryName.length;x++)
    {
        
        arrayCategory[x]=new category();
        arrayCategory[x].inizialite(dataCategoryName[x],dataCategoryButton[x]);
       
    }
}
//menu
function emptyMenu(){
    $('column-left').empty();
}
function fullMenu(){
   // "<div class='titleCategory'><img src='img/boton_documentos_s1.png' width='20' height='15' alt=''>"+arrayCategory[x].name+"</div>"
   for(let x=0;x<arrayCategory.length;x++)
   {
    $('.menu').append("<div id='menuCategory"+x+"' class='menuCategory'>");
    $('#menuCategory'+x).append("<div id='titleCategory' class='titleCategory'><img src='img/boton_documentos_s1.png' width='20' height='15' alt=''>"+arrayCategory[x].name+"</div>");
    for(let y=0;y<arrayCategory[x].buttomn.length;y++)
    $('#menuCategory'+x).append("<li class='menuButomn'>"+arrayCategory[x].buttomn[y]+"</li>");
   }
}
//-----------------------//

//Table content archive
function emptyTable(){
$('.column-rigth').empty();
}
function fullTable(){

}
//-----------------------//