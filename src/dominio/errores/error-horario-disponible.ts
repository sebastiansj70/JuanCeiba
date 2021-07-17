export class ErrorHorarioDisponible extends Error {
    constructor(mensaje: string, clase?: string) {
        super(mensaje);
        this.name = clase || ErrorHorarioDisponible.name;
    }
}