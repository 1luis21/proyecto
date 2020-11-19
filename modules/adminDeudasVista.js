window.onload = function(){
    let base = JSON.parse(localStorage.getItem('miBD'));
    let txt_deudas = '';

    txt_deudas += `
        <tr>
            <td colspan="5">&nbsp;</td>
        </tr>
    `;

    base.datos.forEach(usuario => {
        txt_deudas += `
            <tr>
                <td>${usuario.nombre}</td>
                <td>${usuario.apellidoPaterno}</td>
                <td>${usuario.apellidoMaterno}</td>
                <td>${usuario.telefono}</td>
                <td>${usuario.correo}</td>
                <td>${usuario.balance}</td>
                <td>
                    <input type="checkbox" name="" class="checkboxDeudas" value="${usuario.telefono}">
                </td>
            </tr> 
        `;
    });

    

    // if(document.getElementById('personas-abonos') == )

    document.getElementById('personas-deudas').innerHTML = txt_deudas;
    console.log(txt);
    console.log(base);
};