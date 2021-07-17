// import { IsDateString, Isnumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoRegistrarCancha {

    @ApiProperty({ example: 1 })
    public idCancha: number;

    @ApiProperty({ example: 'Buena' })
    public statusCancha: string;

}
