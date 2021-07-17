import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ticket' })
export class TicketEntidad {

    @PrimaryGeneratedColumn('increment')
    idTicket: number

    @Column()
    telefonoUsuario: Number;

    @Column()
    nombreUsuario: String;

    @Column()
    horaIngreso: Number

    @Column()
    horaSalida: Number

    @Column()
    idCancha: Number

    @Column()
    valor: Number
}