import { Injectable } from '@nestjs/common';

import { DaoCancha } from 'src/dominio/cancha/puerto/dao/dao-cancha';
import { CanchaDto } from 'src/aplicacion/cancha/consulta/dto/canchas.dto';

@Injectable()
export class ManejadorListarCancha {
  constructor(private _daoCancha: DaoCancha) { }

  async ejecutar(): Promise<CanchaDto[]> {
    return this._daoCancha.listar();
  }

  async listarCancha(idCancha: number): Promise<CanchaDto> {
    return await this._daoCancha.listarCancha(idCancha);
  }
}
