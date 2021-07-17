import { Cancha } from '../../modelo/cancha';

export abstract class RepositorioCancha {
//   abstract async existeNombreUsuario(nombre: string): Promise<boolean>;
  abstract async guardar(cancha: Cancha);
}
