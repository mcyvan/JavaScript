var users=[{user:"Pedro", pass:"12345",type:"A"},
           {user:"Fernanda", pass:"fer",type:"A"},
           {user:"Francisco", pass:"1903",type:"B"}
];

var user;
var pass;
var userR;
var passR;

function Extract(){
    user=document.getElementById("user").value;
    pass=document.getElementById("pass").value;
    userR=document.getElementById("userR").value;
    passR=document.getElementById("passR").value;
}

function LogIn(){
    var s= false;
    Extract();
    for (i=0;i<users.length;i++){
        if(user==users[i].user && pass==users[i].pass){
            alert("Logueado");
            s=true;
            if(users[i].type=="A"){
                ShowAdmin();
            }
        }
    }
    if(!s){
        alert("Usuario o Contraseña Incorrecta");
        }
}

function Register(){
    Extract();
    users.push({user:userR, pass:passR, type:"B"});
    alert("Agregado Correctamente");
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

function ShowAdmin(){
    var tabla=document.getElementById("tabla");
    tabla.innerHTML="";
    let tr1=document.createElement("tr");
    let th1=document.createElement("th");
    let th2=document.createElement("th");
    th1.innerHTML="USUARIO";
    th2.innerHTML="TIPO";
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tabla.appendChild(tr1);

    for(i=0;i<users.length;i++){
        let tr =document.createElement("tr");
        let td =document.createElement("td");
        let td2=document.createElement("td");
        let boton=document.createElement("button");
        //llenamos los header con la informacion de la base de datos
        boton.addEventListener("click",()=>{Splice(i)});
        boton.innerHTML="Cambio";
        // input.addEventListener("onchange",()=>{Splice(i, data)});
        // se crean los hijos de las cabeceras
        td.innerHTML=users[i].user;
        td2.innerHTML=users[i].type;
        tr.appendChild(boton);
        tr.appendChild(td);
        tr.appendChild(td2);
        tabla.appendChild(tr);
    }
}

function Splice(D){
    console.log(D);
    if(users[D].type=="B"){
        users[D].type="A";
    }else{
        users[D].type="B";
    }
    ShowAdmin();
}

