import { Injectable } from '@nestjs/common';
import { ServicioRegistrarCancha } from 'src/dominio/cancha/servicio/servicio-registrar-cancha';
import { ComandoRegistrarCancha } from './registrar-cancha.comando';
import { Cancha } from 'src/dominio/cancha/modelo/cancha';

@Injectable()
export class ManejadorRegistrarCancha {
    constructor(private _servicioRegistrarCancha: ServicioRegistrarCancha) { }

    async ejecutar(comandoRegistrarCancha: ComandoRegistrarCancha) {
        await this._servicioRegistrarCancha.ejecutar(
            new Cancha(
                comandoRegistrarCancha.idCancha,
                comandoRegistrarCancha.statusCancha

            ),
        );
    }
}
