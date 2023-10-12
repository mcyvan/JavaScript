function Recibir(){
    var datos=document.getElementById("Data");
    datos.addEventListener("change", function(eve){
        this.setCustomValidity('');
    })
    datos.addEventListener("invalid", function(eve){
        if(this.validity.valueMissing){            
            this.setCustomValidity('Falta este campo de llenar');
        }
    })
}

function Conex(){
    const api='curl -H 'Authorization: Bearer API_KEY' https://api.clashofclans.com/v1/clans?name=F.U.A.'
    fetch(api).then(response=>response.json()).then(json=>console.log(json))
}