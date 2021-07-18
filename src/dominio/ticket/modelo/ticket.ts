import { ErrorLongitudInvalida } from 'src/dominio/errores/error-longitud-invalida';
import { ErrorDiaTRabajo } from 'src/dominio/errores/error-dia-trabajo';
import { ErrorHoraioTrabajo } from 'src/dominio/errores/error-horario-trabajo';
import { ErrorDescuento } from 'src/dominio/errores/error-descuento';

const HORAINGRESO = 8;
const HORASALIDA = 20;
const INICIODESCUENTO = 12;
const FINDESCUENTO = 14;


export class Ticket {
    readonly #telefonoUsuario: number;
    readonly #nombreUsuario: String;
    readonly #horaIngreso: number;
    readonly #horaSalida: number;
    readonly #idCancha: number;
    #valor: number;

    constructor(telefonoUsuario: number, nombreUsuario: String, horaIngreso: number, horaSalida: number, idCancha: number, valor: number) {
        this.verificarDia(horaIngreso);
        this.validarHorarioTrabajo(horaIngreso);
        this.#telefonoUsuario = telefonoUsuario;
        this.#nombreUsuario = nombreUsuario;
        this.#horaIngreso = horaIngreso;
        this.#horaSalida = horaSalida;
        this.#idCancha = idCancha;
        this.#valor = valor;
    }

    private validarHorarioTrabajo(horaIngreso: number) {
        let hora = new Date(horaIngreso).getHours()
        if (hora > HORAINGRESO && hora < HORASALIDA) {
        } else {
            throw new ErrorHoraioTrabajo(
                `El horario de trabajo es de las 8:00 hasta las 20:00`
            )
        }
    }

    private verificarDia(horaIngreso: number) {
        let dia = new Date(horaIngreso).getDay()
        if (dia == 1) {
            throw new ErrorDiaTRabajo(
                `El dia lunes no se permite el ingreso`
            )
        }
    }

    private verificarHora(horaIngreso: number) {
        let hora = new Date(horaIngreso).getHours()
        if (hora > INICIODESCUENTO || hora < FINDESCUENTO) {
        } else {
            throw new ErrorDescuento(
                `El descuento solo se aplica de las 12:00 a 14:00`
            )
        }
    }


    get telefonoUsuario(): number {
        return this.#telefonoUsuario;
    }

    get nombreUsuario(): String {
        return this.#nombreUsuario;
    }

    get horaIngreso(): number {
        return this.#horaIngreso;
    }

    get horaSalida(): number {
        return this.#horaSalida;
    }

    get idCancha(): number {
        return this.#idCancha;
    }

    get valor(): number {
        return this.#valor;
    }
}
