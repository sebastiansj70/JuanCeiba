import { Injectable } from '@nestjs/common';
import { DaoCancha } from 'src/dominio/cancha/puerto/dao/dao-cancha';
import { CanchaDto } from 'src/aplicacion/cancha/consulta/dto/canchas.dto';

@Injectable()
export class ManejadorActualizarCancha {
    constructor(private _daoCancha: DaoCancha) { }

    async ejecutar(idCancha: number, daoCancha: CanchaDto) {
        return this._daoCancha.actualizar(idCancha, daoCancha);
    }
}
