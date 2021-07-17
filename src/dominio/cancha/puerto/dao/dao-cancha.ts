import { CanchaDto } from 'src/aplicacion/cancha/consulta/dto/canchas.dto';

export abstract class DaoCancha {
    abstract async listar(): Promise<CanchaDto[]>;
    abstract async listarCancha(idCancha: number): Promise<CanchaDto>;
    abstract async eliminar(idCancha: number): Promise<void>;
    abstract async actualizar(idCancha: number, canchaDto: CanchaDto);

}
