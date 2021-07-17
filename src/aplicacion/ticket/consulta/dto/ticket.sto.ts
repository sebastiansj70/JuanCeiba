import { ApiProperty } from '@nestjs/swagger';

export class TicketDto {

    @ApiProperty({ example: 123123 })
    telefonoUsuario: number;

    @ApiProperty({ type: String })
    nombreUsuario: string;

    @ApiProperty({ example: 234234 })
    horaIngreso: number;

    @ApiProperty({ example: 12313432 })
    horaSalida: number;

    @ApiProperty({ example: 1 })
    idCancha: number;

    @ApiProperty({ example: 50000 })
    valor: number;
}
