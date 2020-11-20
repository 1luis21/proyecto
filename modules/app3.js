let bd = JSON.parse(localStorage.getItem("miBD"));

if(!bd || bd == undefined){

    bd = { datos: [] }
}


//visualizar numero de telefono de usuario en <select> APARTADO DE DEUDA
const visualizar = () => {

    let arreglo = bd.datos;
    let recibirSelect = document.getElementById('deudores');

    for(let i = 0; i<arreglo.length; i++){

        let option = document.createElement('option');
        option.innerHTML = arreglo[i].nombre;

        recibirSelect.appendChild(option);

    }
};

visualizar();

document.getElementById("btnAgregarAbono").addEventListener("click", ()=>{

    let usuarios = JSON.parse(localStorage.getItem("miBD"));
    let nombre = document.getElementById("deudores").value;
    let balance = document.getElementById("txtAbono").value;
    
    if(balance <= 0){
        return alert("Errorrrrr");
    }

    usuarios.datos.forEach(persona => {

        if(persona.nombre == nombre){
            persona.balance = parseInt(persona.balance) - parseInt(balance);
        }
    });

    localStorage.setItem("miBD", JSON.stringify(usuarios));
    location.replace("adminIntro.html");

});
