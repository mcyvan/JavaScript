var array=["Muscipula",
"Girasol",
"Cactus",
"Suculenta",
"Rosa"];

var object=[
    {Nombre: "Jose", Apellido: "Perez", Edad:32},
    {Nombre: "Jacqueline", Apellido: "Jaquez", Edad:27},
    {Nombre: "Pedro", Apellido: "Aguire", Edad:22},
    {Nombre: "Luis", Apellido: "Vasquez", Edad:15}
];


function Main(){
    ShowList();
    ShowTable();
}

function ShowTable(){
    var table = document.getElementById("Table");
    for (i=0;i<object.length;i++){
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        var td2=document.createElement("td");
        var td3=document.createElement("td");
        td1.innerHTML=object[i].Nombre;
        td2.innerHTML=object[i].Apellido;
        td3.innerHTML=object[i].Edad;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
    }
}

function Alternativo(){
    var lista = document.getElementById("list");
    // funcion para desarmar arreglos
    array.forEach(function(datos) {
        var li = document.createElement("li");
        li.innerHTML=datos;
        lista.appendChild(li);
    });
}


function ShowList(){
    var lista = document.getElementById("list");
    // informacion que esta entre el inicio y fin de los elementos

    for(i=0;i<array.length;i++){
        var li = document.createElement("li");
        li.innerHTML=array[i];
        lista.appendChild(li);
    }
}

function Login(){
    // trae etiqueta del html por el id
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    for(i=0;i<object.length;i++){
        if (nombre == object[i].Nombre && apellido == object[i].Apellido) {
            console.log("Se cumple");
        }else{
            console.log("No Se cumple");
        }
    }
}