// // todo el contenido entre "" es texto
// var cadena = "Hola Mundo";
// // los numeros van sin "" y toma el valor como numero para operaciones
// var numero = 12;
// // estos valores se manejan en ingles true or false
// var booleanos = true;
// var booleanos2 = false;

// // variable no publica
// let privada = "variable privada";

// // variable que no cambia nunca
// const constante = "No cambia";

// // arreglo
// var arreglo = ["Jose Galindo","Gabriel"];
// var arregloN = [60,4,7,50.5,3];
// var resultado= arregloN[0] + arregloN[1];

// // Objetos
// var objeto = {nombre:"Elfeliz123",pass:"123456", edad: 23};

// // Arreglo de Objetos
// var AO = [
//     {producto: "Camisa", precio:200},
//     {producto: "Pantalon", precio:500},
//     {producto: "Zapatos", precio:300},
//     {producto: "Cachucha", precio:100}
// ]

// // console.log(objeto.nombre +" "+ objeto.pass +" "+objeto.edad);
// console.log(AO[1].producto);


var variable1="Hola Mundo";
var variable2="1235";

// if (variable2 == '1234' || variable1 == 'Hola Mundo') {
//     console.log("Se cumple");
// }else{
//     console.log("No se cumple");
// }


// USO DE DOM

function Login(){
// trae etiqueta del html por el id
var user=document.getElementById("user").value;
var pass=document.getElementById("pass").value;

console.log(user);
console.log(pass);

if (variable2 == pass || variable1 == user) {
    console.log("Se cumple");
}else{
    console.log("No se cumple");
}
}

function Sumar(){
    // trae etiqueta del html por el id
    var numero1=parseInt(document.getElementById("numero1").value);
    var numero2=parseInt(document.getElementById("numero2").value);

    var resultado = numero1 + numero2;
    console.log(numero1);
    console.log(numero2);
    console.log(resultado);


    if (resultado>=100) {
        console.log("Suma mayor a 100");
    }else{
        console.log("Sigue sumandole");
    }
    }
    
function Condition(){
    let numero2=parseInt(document.getElementById("numero3").value);
    console.log(numero2);   
    if (numero2>=10) {
        if (numero2>=20) {
            console.log("Tu numero es mayor a 20");
            
        }else{
            console.log("Tu numero es mayor de 10");
        }
        
    }else{
        console.log("Tu numero es menor de 10");
    }
}

var a=0;
function Ciclos(){
    for(let i=0;i <= 10; i++){
        // a=a+i;
        a+=i; 
        console.log("Si entra: "+i);
        if(i==3){
            console.log("El valor es 3");
        }
    }
        console.log("El acumulado es: "+a);
}