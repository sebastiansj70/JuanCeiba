import { RepositorioTicket } from 'src/dominio/ticket/puerto/repositorio/repositorio-ticket';
import { ServicioRegistrarTicket } from 'src/dominio/ticket/servicio/servicio-registrar-ticket';

export function servicioRegistrarTicketProveedor(RepositorioTicket: RepositorioTicket) {
    return new ServicioRegistrarTicket(RepositorioTicket);
}