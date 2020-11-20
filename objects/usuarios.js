class Usuario{
    constructor(nombre, apellidoPaterno, apellidoMaterno, telefono, correo, pw, balance,abono,deuda){

        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.telefono = telefono;
        this.correo = correo;
        this.pw = pw;
        this.balance = balance;
        this.abono = [abono];
        this.deuda = [deuda];
    }
}