import { Module } from '@nestjs/common';
import { ServicioRegistrarCancha } from 'src/dominio/cancha/servicio/servicio-registrar-cancha';
import { RepositorioCancha } from 'src/dominio/cancha/puerto/repositorio/repositorio-canchas';
import { servicioRegistrarCanchaProveedor } from './servicio/servicio-registrar-cancha.proveedor';
import { repositorioCanchaProvider } from './repositorio/repositorio-cancha.proveedor';
import { daoCanchaProvider } from './dao/dao-cancha.proveedor';
import { ManejadorListarCancha } from 'src/aplicacion/cancha/consulta/listar-cancha.menejador';
import { ManejadorEliminarCancha } from 'src/aplicacion/cancha/consulta/eliminar-cancha.menejador';
import { ManejadorActualizarCancha } from 'src/aplicacion/cancha/consulta/actualizar-cancha.manejador';
import { DaoCancha } from 'src/dominio/cancha/puerto/dao/dao-cancha';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanchaEntidad } from '../entidad/cancha.entidad';
import { ManejadorRegistrarCancha } from 'src/aplicacion/cancha/comando/registrar-cancha.manejador';

@Module({
  imports: [TypeOrmModule.forFeature([CanchaEntidad])],
  providers: [
    { provide: ServicioRegistrarCancha, inject: [RepositorioCancha], useFactory: servicioRegistrarCanchaProveedor },
    repositorioCanchaProvider,
    daoCanchaProvider,
    ManejadorListarCancha,
    ManejadorEliminarCancha,
    ManejadorActualizarCancha,
    ManejadorRegistrarCancha
  ],
  exports: [
    ServicioRegistrarCancha,
    ManejadorListarCancha,
    RepositorioCancha,
    DaoCancha,
    ManejadorEliminarCancha,
    ManejadorActualizarCancha,
    ManejadorRegistrarCancha
  ],
})
export class CanchaProveedorModule {

}
