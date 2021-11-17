export class Operacion {
    idMoneda1: number;
    idMoneda2: number;
    cambio: number;
    monto: number;
    montoCambio: number;
    fecha: String;

    constructor(){
        this.idMoneda1 = 0;
        this.idMoneda2 = 0;
        this.cambio = 0;
        this.monto = 0;
        this.montoCambio = 0;
        this.fecha = '';
    }
}