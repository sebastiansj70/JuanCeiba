import { Injectable } from '@nestjs/common';
import { ServicioRegistrarTicket } from 'src/dominio/ticket/servicio/servicio-registrar-ticket';
import { ComandoRegistrarTicket } from './registrar-ticket.comando';
import { Ticket } from 'src/dominio/ticket/modelo/ticket';

@Injectable()
export class ManejadorRegistrarTicket {
    constructor(private _servicioRegistrarTicket: ServicioRegistrarTicket) { }

    async ejecutar(comandoRegistrarTicket: ComandoRegistrarTicket) {
        await this._servicioRegistrarTicket.ejecutar(
            new Ticket(
                comandoRegistrarTicket.telefonoUsuario,
                comandoRegistrarTicket.nombreUsuario,
                comandoRegistrarTicket.horaIngreso,
                comandoRegistrarTicket.horaSalida,
                comandoRegistrarTicket.idCancha,
                comandoRegistrarTicket.valor,
            ),
        );
    }
}
