var boolean=true;
var string="Akira";


function Check(){
    var datos=document.getElementById("datos").value;
    if(string != datos){
        alert("funciona!!");
    }else{
        alert("Es Tamal");
    }
}

function Create(){
    var object=document.getElementById("show");
    var box =document.getElementById("box").checked;
    if (box) {        
        object.style.background="pink";
        object.style.width="100%";
        object.style.textAlign="right";
        var imagen=document.createElement("img");
        imagen.src="algo.jpg"
        object.appendChild(imagen);
    }
}