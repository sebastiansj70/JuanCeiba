import { Injectable } from '@nestjs/common';
import { DaoTicket } from 'src/dominio/ticket/puerto/dao/dao-ticket';
import { TicketDto } from 'src/aplicacion/ticket/consulta/dto/ticket.sto';

@Injectable()
export class ManejadorActualizarTicket {
    constructor(private _daoTicket: DaoTicket) { }

    async ejecutar(idTicket: number, ticketDto: TicketDto) {
        return this._daoTicket.actualizar(idTicket, ticketDto);
    }
}
