import { Module } from '@nestjs/common';
import { ServicioRegistrarTicket } from 'src/dominio/ticket/servicio/servicio-registrar-ticket';
import { RepositorioTicket } from 'src/dominio/ticket/puerto/repositorio/repositorio-ticket';
import { servicioRegistrarTicketProveedor } from './servicio/servicio-registrar-ticket.proveedor';
import { repositorioTicketProvider } from './repositorio/repositorio-ticket.proveedor';
import { daoTicketProvider } from './dao/dao-ticket.proveedor';
import { ManejadorRegistrarTicket } from 'src/aplicacion/ticket/comando/registrar-ticket.manejador';
import { ManejadorListarTicket } from 'src/aplicacion/ticket/consulta/listar-ticket.manejador';
import { ManejadorEliminarTicket } from 'src/aplicacion/ticket/consulta/eliminar-ticket.manejador';
import { ManejadorActualizarTicket } from 'src/aplicacion/ticket/consulta/actualizar-ticket.manejador';
import { DaoTicket } from 'src/dominio/ticket/puerto/dao/dao-ticket';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketEntidad } from '../entidad/ticket.entidad';

@Module({
    imports: [TypeOrmModule.forFeature([TicketEntidad])],
    providers: [
        { provide: ServicioRegistrarTicket, inject: [RepositorioTicket], useFactory: servicioRegistrarTicketProveedor },
        repositorioTicketProvider,
        daoTicketProvider,
        ManejadorRegistrarTicket,
        ManejadorListarTicket,
        ManejadorEliminarTicket,
        ManejadorActualizarTicket
    ],
    exports: [
        ServicioRegistrarTicket,
        ManejadorRegistrarTicket,
        ManejadorListarTicket,
        RepositorioTicket,
        DaoTicket,
        ManejadorEliminarTicket,
        ManejadorActualizarTicket
    ],
})
export class TicketProveedorModule {

}
