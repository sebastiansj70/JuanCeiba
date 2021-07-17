// import { IsDateString, Isnumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoRegistrarTicket {

    @ApiProperty({ example: 1234567890 })
    public telefonoUsuario: number;

    @ApiProperty({ example: 'Juan' })
    public nombreUsuario: String;

    @ApiProperty({ example: 1626442744315 })
    public horaIngreso: number

    @ApiProperty({ example: 1626442744315 })
    public horaSalida: number

    @ApiProperty({ example: 1 })
    public idCancha: number

    @ApiProperty({ example: 50000 })
    public valor: number
}
