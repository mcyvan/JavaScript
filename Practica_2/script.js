var users=[{user:"Pedro", pass:"12345"},{user:"Fernanda", pass:"fer"},{user:"Francisco", pass:"1903"}
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
        }
    }
    if(!s){
        alert("Usuario o Contraseña Incorrecta");
        }
}

function Register(){
    Extract();
    users.push({user:userR, pass:passR});
    alert("Agregado Correctamente");
}