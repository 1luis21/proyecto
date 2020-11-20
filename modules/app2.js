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

document.getElementById("btnAgregarDeuda").addEventListener("click",()=>{

    let usuarios = JSON.parse(localStorage.getItem("miBD"));
    let nombre = document.getElementById("deudores").value;
    let balance = document.getElementById("txtAgregarDeuda").value;

    let date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let year = date.getFullYear();
    let fecha = `${dia}/${mes}/${year}`;

    if(balance <= 0){
        return alert("Errorrrrr");
    }

    usuarios.datos.forEach(persona => {

        if(persona.nombre == nombre){
            persona.balance = parseInt(persona.balance) + parseInt(balance);
            persona.deuda.push([fecha,balance]);
        }
    });

    localStorage.setItem("miBD", JSON.stringify(usuarios));
    location.replace("adminIntro.html");

});
