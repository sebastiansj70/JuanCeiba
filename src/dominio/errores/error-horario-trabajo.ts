export class ErrorHoraioTrabajo extends Error {
    constructor(mensaje: string, clase?: string) {
        super(mensaje);
        this.name = clase || ErrorHoraioTrabajo.name;
    }
}