import { ApiProperty } from '@nestjs/swagger';

export class CanchaDto {

  @ApiProperty({ example: '001' })
  idCancha: number;

  @ApiProperty({ example: 'Libre' })
  statusCancha: string;
}
