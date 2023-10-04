var input;
var input2;

var nuevoUsuario=[
    {
        user:"Jose",
        pass:"1234",
        age:29
    }
]

function Extract(){
    input=document.getElementById("inputUser").value;    
    input2=document.getElementById("inputAge").value;    
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
    for(let i=0;i<nuevoUsuario.length;i++){
        // crear los elementos de la lista LI
        var li=document.createElement("li");
        // traer la informacion del arreglo al objeto li
        li.innerHTML="Nombre: "+nuevoUsuario[i].user+" / Edad: "+ nuevoUsuario[i].age;
        // 
        lista.appendChild(li);
    }
}
function Registro(){
    Extract();
    nuevoUsuario.push({user:input, age:input2});
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