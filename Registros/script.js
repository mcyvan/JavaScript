var array=["Jose","Pedro","Joel","Gaby"];
var input;
var nuevoUsuario=[
    {
        user:"Jose",
        pass:"1234",
        age:29
    }
]

function Extract(){
    input=document.getElementById("inputUser").value;    
}

function LogIn(){
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;

    if(user==array[1]){
        alert("funciona");
        
    }
}

function Show(){
    var lista=document.getElementById("lista");
    lista.innerHTML=" ";
    for(let i=0;i<array.length;i++){
        // crear los elementos de la lista LI
        var li=document.createElement("li");
        li.id="Ejemplo"+i;
        var button=document.createElement("button");
        button.innerHTML="Delete";
        // agrega un evento que escucha el click en el boton
        // , y elimina el registro con el index i
        button.addEventListener("click",()=>{Splice(i)})
        // traer la informacion del arreglo al objeto li
        li.innerHTML=array[i];
        li.appendChild(button);
        lista.appendChild(li);
    }
}
function Registro(){
    Extract();
    array.push(input);
    Show();
}
function Borrar(){
    var temp=array.pop();
    alert(temp);
    Show();
}
function BorrarP(){
    array.shift();
    Show();
}
function InsertarE(){
    Extract();
    array.unshift(input);
    Show();
}
function Ordenar(){
    array.sort();
    Show();
}
function Invertir(){
    array.reverse();
    Show();
}
function Search(){
    Extract();
    var res=array.find(Variable => Variable==input);
    if(res){
        alert(res);
    }else{
        alert("No se encontro!");
    }
}
function Splice(i){
    array.splice(i,1);
    Show();
}