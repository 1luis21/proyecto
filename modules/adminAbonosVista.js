window.onload = function(){
    let base = JSON.parse(localStorage.getItem('miBD'));
    let txt_abonos = '';

    txt_abonos += `
        <tr>
            <td colspan="5">&nbsp;</td>
        </tr>
    `;

    base.datos.forEach(usuario => {
        txt_abonos += `
            <tr>
                <td>${usuario.nombre}</td>
                <td>${usuario.apellidoPaterno}</td>
                <td>${usuario.apellidoMaterno}</td>
                <td>${usuario.telefono}</td>
                <td>${usuario.correo}</td>
                <td>${usuario.balance}</td>
                <td>
                    <input type="radio" name="persona" id="" value="${usuario.telefono}">
                </td>
            </tr>
        `;
    });
    
    document.getElementById('personas-abonos').innerHTML = txt_abonos;
    console.log(txt);
    console.log(base);
};