import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cancha' })
export class CanchaEntidad {
    @PrimaryGeneratedColumn()
    idCancha: number;

    @Column()
    statusCancha: string;
}