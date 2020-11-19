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


// document.getElementById("btnAgregarDeuda").addEventListener("click", () => {

//     let deuda = document.getElementById('txtAgregarDeuda').value;

//     bd.datos.usuariox.balance.push(deuda);

//     alert("Se cambió el balance");

// });