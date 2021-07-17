import { RepositorioCancha } from 'src/dominio/cancha/puerto/repositorio/repositorio-canchas';
import { Cancha } from 'src/dominio/cancha/modelo/cancha';
import { InjectRepository } from '@nestjs/typeorm';
import { CanchaEntidad } from '../../entidad/cancha.entidad';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RepositorioCanchaMysql implements RepositorioCancha {
    constructor(
        @InjectRepository(CanchaEntidad)
        private readonly repositorio: Repository<CanchaEntidad>,
    ) { }


    async guardar(cancha: Cancha) {
        const entidad = new CanchaEntidad();
        entidad.idCancha = cancha.idCancha;
        entidad.statusCancha = cancha.statusCancha;
        await this.repositorio.save(entidad);
    }
}
