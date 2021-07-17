import { Body, Put, Delete, Param, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ManejadorListarCancha } from 'src/aplicacion/cancha/consulta/listar-cancha.menejador';
import { CanchaDto } from 'src/aplicacion/cancha/consulta/dto/canchas.dto';
import { ManejadorEliminarCancha } from 'src/aplicacion/cancha/consulta/eliminar-cancha.menejador';
import { ManejadorActualizarCancha } from 'src/aplicacion/cancha/consulta/actualizar-cancha.manejador';
import { ComandoRegistrarCancha } from 'src/aplicacion/cancha/comando/registrar-cancha.comando';
import { ManejadorRegistrarCancha } from 'src/aplicacion/cancha/comando/registrar-cancha.manejador';

@Controller('cancha')
export class CanchaControlador {
    constructor(
        private readonly _manejadorRegistrarCancha: ManejadorRegistrarCancha,
        private readonly _manejadorListarCancha: ManejadorListarCancha,
        private readonly _manejadorEliminarCancha: ManejadorEliminarCancha,
        private readonly _manejadorActualizarCancha: ManejadorActualizarCancha,

    ) { }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async crear(@Body() comandoRegistrarCancha: ComandoRegistrarCancha) {
        await this._manejadorRegistrarCancha.ejecutar(comandoRegistrarCancha);
    }

    @Get("/listar")
    async listar(): Promise<CanchaDto[]> {
        return this._manejadorListarCancha.ejecutar();
    }

    @Get('/listarCancha/:idCancha')
    async listarTicket(@Param('idCancha') idCancha: number): Promise<CanchaDto> {
        return await this._manejadorListarCancha.listarCancha(idCancha);
    }

    @Delete('/eliminar/:idCancha')
    async eliminar(@Param('idCancha') idCancha: number) {
        return await this._manejadorEliminarCancha.ejecutar(idCancha)
    }


    @Put("/actualizar/:idCancha")
    async actualizar(@Param() idCancha: number, @Body() canchaDto: CanchaDto): Promise<CanchaDto> {
        return await this._manejadorActualizarCancha.ejecutar(idCancha, canchaDto)
    }
}
