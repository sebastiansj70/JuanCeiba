import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { DaoCancha } from 'src/dominio/cancha/puerto/dao/dao-cancha';
import { CanchaDto } from 'src/aplicacion/cancha/consulta/dto/canchas.dto';
import { CanchaEntidad } from '../../entidad/cancha.entidad';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DaoCanchaMysql implements DaoCancha {
    constructor(
        @InjectRepository(CanchaEntidad)
        private readonly repositorio: Repository<CanchaEntidad>,
        @InjectEntityManager()
        private readonly entityManager: EntityManager,

    ) { }

    async listar(): Promise<CanchaDto[]> {
        return this.entityManager.query(
            'SELECT * FROM cancha',
        );
    }

    async listarCancha(idCancha: number): Promise<CanchaDto> {
        return await this.entityManager.query(
            `SELECT * FROM cancha where idCancha =${idCancha}`
        )

    }

    async actualizar(idCancha: number, canchaDto: CanchaDto) {
        const entidad = new CanchaEntidad();
        entidad.idCancha = canchaDto.idCancha;
        entidad.statusCancha = canchaDto.statusCancha;
        await this.repositorio.update(idCancha, entidad)
    }

    async eliminar(idCancha: number) {
        return await this.entityManager.query(
            `DELETE FROM cancha WHERE cancha.idCancha = ${idCancha}`
        );
    }
}
