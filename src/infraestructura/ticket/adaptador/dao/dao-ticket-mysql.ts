import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { DaoTicket } from 'src/dominio/ticket/puerto/dao/dao-ticket';
import { TicketDto } from 'src/aplicacion/ticket/consulta/dto/ticket.sto';
import { TicketEntidad } from '../../entidad/ticket.entidad';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DaoTicketMysql implements DaoTicket {
    constructor(
        @InjectRepository(TicketEntidad)
        private readonly repositorio: Repository<TicketEntidad>,
        @InjectEntityManager()
        private readonly entityManager: EntityManager,

    ) { }

    async listar(): Promise<TicketDto[]> {
        return await this.entityManager.query(
            'SELECT * FROM ticket',
        );
    }

    async eliminar(idTicket: number) {
        return await this.entityManager.query(
            'DELETE FROM ticket WHERE ticket.idTicket = ' + idTicket
        );
    }

    async actualizar(idTicket: number, ticketDto: TicketDto) {
        const entidad = new TicketEntidad();
        entidad.telefonoUsuario = ticketDto.telefonoUsuario;
        entidad.nombreUsuario = ticketDto.nombreUsuario;
        entidad.horaIngreso = ticketDto.horaIngreso;
        entidad.horaSalida = ticketDto.horaSalida;
        entidad.idCancha = ticketDto.idCancha;
        entidad.valor = ticketDto.valor
        await this.repositorio.update(idTicket, entidad)
    }

    async listarTicket(idTicket: number): Promise<TicketDto> {
        console.log(idTicket, '++++++++++++++++++++')
        return await this.entityManager.query(
            `SELECT * FROM ticket where idTicket =${idTicket}`
        )

    }
}
