import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ManejadorListarTicket } from 'src/aplicacion/ticket/consulta/listar-ticket.manejador';
import { ManejadorEliminarTicket } from 'src/aplicacion/ticket/consulta/eliminar-ticket.manejador';
import { ManejadorActualizarTicket } from 'src/aplicacion/ticket/consulta/actualizar-ticket.manejador';
import { ManejadorRegistrarTicket } from 'src/aplicacion/ticket/comando/registrar-ticket.manejador';
import { ComandoRegistrarTicket } from 'src/aplicacion/ticket/comando/registrar-ticket.comando';

import { TicketDto } from 'src/aplicacion/ticket/consulta/dto/ticket.sto';

@Controller('ticket')
export class TicketControlador {
    constructor(
        private readonly _manejadorRegistrarTicket: ManejadorRegistrarTicket,
        private readonly _manejadorListarTicket: ManejadorListarTicket,
        private readonly _manejadorEliminarTicket: ManejadorEliminarTicket,
        private readonly _manejadorActualizarTicket: ManejadorActualizarTicket,
    ) { }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async crear(@Body() comandoRegistrarTicket: ComandoRegistrarTicket) {
        await this._manejadorRegistrarTicket.ejecutar(comandoRegistrarTicket);
    }

    @Get("/listar")
    async listar(): Promise<TicketDto[]> {
        return await this._manejadorListarTicket.ejecutar();
    }

    @Get('/listarTicket/:idTicket')
    async listarTicket(@Param('idTicket') idTicket: number): Promise<TicketDto> {
        return await this._manejadorListarTicket.listarTicket(idTicket);
    }

    @Delete('/eliminar/:idTicket')
    async eliminar(@Param('idTicket') idTicket: number) {
        return await this._manejadorEliminarTicket.ejecutar(idTicket)
    }


    @Put("/actualizar/:idTicket")
    async actualizar(@Param() idTicket: number, @Body() ticketDto: TicketDto): Promise<TicketDto> {
        return await this._manejadorActualizarTicket.ejecutar(idTicket, ticketDto)
    }


}
