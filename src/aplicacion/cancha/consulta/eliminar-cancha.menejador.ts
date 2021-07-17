import { Injectable } from '@nestjs/common';
import { DaoCancha } from 'src/dominio/cancha/puerto/dao/dao-cancha';

@Injectable()
export class ManejadorEliminarCancha {
    constructor(private _daoCancha: DaoCancha) { }

    async ejecutar(idCancha: number): Promise<void> {
        return this._daoCancha.eliminar(idCancha);
    }
}
