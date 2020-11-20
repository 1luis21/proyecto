window.onload = function(){
    let bd = JSON.parse(localStorage.getItem("miBD"));

    if(!bd || bd == undefined){

        bd = { datos: [] }
    }

    let base = JSON.parse(localStorage.getItem('miBD'));
    let txt_usuario = '';
    base.datos.forEach(usuario => {
        txt_usuario += `
        <section class="card">

            <div class="card_data">

                <div class="card_data-icon">
                    
                    <span class="icon"><i class="fas fa-user-tie"></i></span>

                </div>

                <div class="card_data-text">

                    <h3 class="name">${usuario.nombre} ${usuario.apellidoPaterno}</h3>

                    <p>Ultimo pago en: <span class="agree">$500</span></p>
                    <p>Ultimo abono de: <span class="agree">$500</span></p>
                    <P>Deuda total: <span class="desagree" id="deuda">$ ${usuario.balance}</span></P>

                </div>

            </div>

        </section>
        `;
    });

    

    // if(document.getElementById('personas-abonos') == )

    document.getElementById('cards_usuario').innerHTML = txt_usuario;
    console.log(txt);
    console.log(base);
};