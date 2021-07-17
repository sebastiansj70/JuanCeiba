import { RepositorioTicket } from 'src/dominio/ticket/puerto/repositorio/repositorio-ticket';
import { Ticket } from 'src/dominio/ticket/modelo/ticket';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketEntidad } from '../../entidad/ticket.entidad';
import { Repository, EntityManager, Between } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';


@Injectable()
export class RepositorioTicketMysql implements RepositorioTicket {
    constructor(
        @InjectRepository(TicketEntidad)
        private readonly repositorio: Repository<TicketEntidad>,
        @InjectEntityManager()
        private readonly entityManager: EntityManager,
    ) { }


    verificarDia(horaIngreso: number): Boolean {
        let dia = new Date(horaIngreso).getDay()
        if (dia != 1)
            return true
        return false
    }

    verificarHorarioTrabajo(horaIngreso: number): Boolean {
        console.log(horaIngreso, 'horaIngreso')
        let hora = new Date(horaIngreso).getHours()
        if (hora >= 8 && hora <= 20)
            return true
        return false
    }

    verificarHorarioDescuento(horaIngreso: number): Boolean {
        let hora = new Date(horaIngreso).getHours()
        if (hora >= 12 && hora <= 14)
            return true
        return false

    }

    async verificarDisponibilidad(horaIngreso: number): Promise<Boolean> {

        const statusCancha = await this.entityManager.query(
            'SELECT * FROM ticket WHERE ' + horaIngreso + ' BETWEEN `horaIngreso` AND  `horaSalida`'
        )
        if (statusCancha == [])
            return true
        return false


    }

    async guardar(ticket: Ticket) {
        const entidad = new TicketEntidad();
        entidad.telefonoUsuario = ticket.telefonoUsuario;
        entidad.nombreUsuario = ticket.nombreUsuario;
        entidad.horaIngreso = ticket.horaIngreso;
        entidad.horaSalida = ticket.horaSalida;
        entidad.idCancha = ticket.idCancha;
        entidad.valor = ticket.valor
        await this.repositorio.save(entidad);
    }
}
