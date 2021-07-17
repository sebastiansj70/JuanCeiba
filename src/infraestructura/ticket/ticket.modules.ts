import { Module } from '@nestjs/common';
import { TicketControlador } from './controlador/ticket.controlador';
import { TicketProveedorModule } from './proveedor/ticket-proveedor.module';

@Module({
    imports: [
        TicketProveedorModule
    ],
    controllers: [TicketControlador],
})
export class TicketModule { }