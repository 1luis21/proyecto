const login = () => {
    let tel = document.getElementById("txtTelefono").value;
    let pw  = document.getElementById("txtPassword").value;

    if (tel == 3121983578 && pw == 321){
        alert("Logged in");
        window.location.href = "views/adminIntro.html";
    }

    else{
        alert("Error");
    }
};