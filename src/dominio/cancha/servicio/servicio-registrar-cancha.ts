import { RepositorioCancha } from '../puerto/repositorio/repositorio-canchas';
import { Cancha } from '../modelo/cancha';
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';

export class ServicioRegistrarCancha {

  constructor(private readonly _repositorioCancha: RepositorioCancha) {
  }

  async ejecutar(cancha: Cancha) {
    await this._repositorioCancha.guardar(cancha);
  }
}
