import { TicketDto } from 'src/aplicacion/ticket/consulta/dto/ticket.sto';

export abstract class DaoTicket {
    abstract async listar(): Promise<TicketDto[]>;
    abstract async eliminar(idTicket: number): Promise<void>;
    abstract async actualizar(idTicket: number, ticketDto: TicketDto);
    abstract async listarTicket(idTicket: number): Promise<TicketDto>;


}
