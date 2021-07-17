import { Module } from '@nestjs/common';
import { CanchaControlador } from './controlador/cancha.controlador';
import { CanchaProveedorModule } from './proveedor/cancha-proveedor.module';

@Module({
    imports: [
        CanchaProveedorModule
    ],
    controllers: [CanchaControlador],
})
export class CanchaModule { }
