import { RepositorioCancha } from 'src/dominio/cancha/puerto/repositorio/repositorio-canchas';
import { RepositorioCanchaMysql } from 'src/infraestructura/cancha/adaptador/repositorio/repositorio-cancha-mysql';

export const repositorioCanchaProvider = {
  provide: RepositorioCancha,
  useClass: RepositorioCanchaMysql,
};
