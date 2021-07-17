import { RepositorioCancha } from 'src/dominio/cancha/puerto/repositorio/repositorio-canchas';
import { ServicioRegistrarCancha } from 'src/dominio/cancha/servicio/servicio-registrar-cancha';

export function servicioRegistrarCanchaProveedor(repositorioCancha: RepositorioCancha) {
    return new ServicioRegistrarCancha(repositorioCancha);
}