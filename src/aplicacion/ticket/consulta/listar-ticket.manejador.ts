import { Injectable } from '@nestjs/common';

import { DaoTicket } from 'src/dominio/ticket/puerto/dao/dao-ticket';
import { TicketDto } from 'src/aplicacion/ticket/consulta/dto/ticket.sto';

@Injectable()
export class ManejadorListarTicket {
    constructor(private _daoTicket: DaoTicket) { }

    async ejecutar(): Promise<TicketDto[]> {
        return await this._daoTicket.listar();
    }

    async listarTicket(idTicket: number): Promise<TicketDto> {
        return await this._daoTicket.listarTicket(idTicket);
    }
}
