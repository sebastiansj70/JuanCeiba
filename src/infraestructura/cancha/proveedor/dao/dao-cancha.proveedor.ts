import { DaoCancha } from 'src/dominio/cancha/puerto/dao/dao-cancha';
import { DaoCanchaMysql } from 'src/infraestructura/cancha/adaptador/dao/dao-cancha-mysql';

export const daoCanchaProvider = {
  provide: DaoCancha,
  useClass: DaoCanchaMysql,
};
