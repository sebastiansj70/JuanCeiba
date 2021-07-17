import { DaoTicket } from 'src/dominio/ticket/puerto/dao/dao-ticket';
import { DaoTicketMysql } from 'src/infraestructura/ticket/adaptador/dao/dao-ticket-mysql';

export const daoTicketProvider = {
    provide: DaoTicket,
    useClass: DaoTicketMysql,
};