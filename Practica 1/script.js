var object=[
    {Nombre: "Ivan", Password: "123"},
    {Nombre: "Francisco", Password: "123"}    
];

// console.log(object[1].Nombre);

function Login(){
    var nombre=document.getElementById("nom").value;
    var password=document.getElementById("pass").value;
    var edad=document.getElementById("e").value;
    

console.log(nombre);


    for(i=0;i<object.length;i++){
        if (nombre == object[i].Nombre && password == object[i].Password) {
            if(edad>=18){
                console.log("Enviando a Pagina para adulto");                
            }else{
                console.log("Enviando a pagina infantil");
            }
        }
    }

}