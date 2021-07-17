import { RepositorioTicket } from '../puerto/repositorio/repositorio-ticket';
import { Ticket } from '../modelo/ticket';
import { ErrorHoraioTrabajo } from 'src/dominio/errores/error-horario-trabajo';
import { ErrorDiaTRabajo } from 'src/dominio/errores/error-dia-trabajo';
import { ErrorHorarioDisponible } from 'src/dominio/errores/error-horario-disponible';

export class ServicioRegistrarTicket {

    constructor(private readonly _repositorioTicket: RepositorioTicket
    ) { }

    async ejecutar(ticket: Ticket) {
        // Validar reglas:
        //1. No se permite registrar los dias lunes
        //2. Solo permite registrar desde las 8:00 hastas las 20:00
        //3. Al registrar un ticket desde las 12:00 hastas las 14:00 tiene un descuento del 50%
        if (this._repositorioTicket.verificarDia(ticket.horaIngreso)) {
            if (this._repositorioTicket.verificarHorarioTrabajo(ticket.horaIngreso)) {
                if (this._repositorioTicket.verificarDisponibilidad(ticket.horaIngreso)) {
                    if (this._repositorioTicket.verificarHorarioDescuento(ticket.horaIngreso)) {
                        console.log('ticket a mitad de precio')
                        await this._repositorioTicket.guardar(
                            new Ticket(
                                ticket.telefonoUsuario,
                                ticket.nombreUsuario,
                                ticket.horaIngreso,
                                ticket.horaSalida,
                                ticket.idCancha,
                                ticket.valor / 2,
                            )
                        );
                    } else {

                        await this._repositorioTicket.guardar(ticket);
                    }
                } else {
                    // throw new ErrorHorarioDisponible(
                    //     `Horario no disponible`
                    // )
                }
            } else {
                // throw new ErrorHoraioTrabajo(
                //     `El Horio de trabajo es de las 8:00 hastas las 20:00`
                // )
            }
        } else {
            // throw new ErrorDiaTRabajo(
            //     `El dia Lunes no se permite el ingreso al establecimiento por motivos de mantenimiento`
            // )
        }
    }
}
