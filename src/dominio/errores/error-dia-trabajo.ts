export class ErrorDiaTRabajo extends Error {
    constructor(mensaje: string, clase?: string) {
        super(mensaje);
        this.name = clase || ErrorDiaTRabajo.name;
    }
}