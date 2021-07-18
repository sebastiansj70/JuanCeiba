export class ErrorDescuento extends Error {
    constructor(mensaje: string, clase?: string) {
        super(mensaje);
        this.name = clase || ErrorDescuento.name;
    }
}