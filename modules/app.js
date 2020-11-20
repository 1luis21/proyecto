let bd = JSON.parse(localStorage.getItem("miBD"));

if(!bd || bd == undefined){

    bd = { datos: [] }
}



document.getElementById("btnAgregar").addEventListener("click", ()=>{


    let nombre          = document.getElementById("name").value;
    let apellidoPaterno = document.getElementById("apePaterno").value;
    let apellidoMaterno = document.getElementById("apeMaterno").value;
    let telefono        = document.getElementById("tel").value;
    let correo          = document.getElementById("mail").value;
    let pw              = document.getElementById("pass").value;
    let balance         = document.getElementById("balance").value;

    let date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let year = date.getFullYear();

    let fecha = `${dia}/${mes}/${year}`;
    let abono = [fecha,0];
    let deuda = [fecha,0];
    //instanciamos nuevo usaurio
    let usuariox = new Usuario(nombre, apellidoPaterno, apellidoMaterno, telefono, correo, pw, balance, abono, deuda);



    //almacenamos como objeto en el array "bd";+
    bd.datos.push(usuariox);

    localStorage.setItem("miBD", JSON.stringify(bd));
    console.log("Guardado" + usuariox);

    alert("Usuario " + nombre + " " + apellidoPaterno + " " + apellidoMaterno + " guardado");

});
