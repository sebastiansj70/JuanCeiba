import { RepositorioTicket } from 'src/dominio/ticket/puerto/repositorio/repositorio-ticket';
import { RepositorioTicketMysql } from 'src/infraestructura/ticket/adaptador/repositorio/repositorio-ticket-mysql';

export const repositorioTicketProvider = {
    provide: RepositorioTicket,
    useClass: RepositorioTicketMysql,
};
