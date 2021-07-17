import { Injectable } from '@nestjs/common';
import { DaoTicket } from 'src/dominio/ticket/puerto/dao/dao-ticket';
import { TicketDto } from 'src/aplicacion/ticket/consulta/dto/ticket.sto';

@Injectable()
export class ManejadorEliminarTicket {
    constructor(private _daoTicket: DaoTicket) { }

    async ejecutar(idTicket: number): Promise<void> {
        return this._daoTicket.eliminar(idTicket);
    }
}
