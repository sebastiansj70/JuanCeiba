import { Ticket } from '../../modelo/ticket';

export abstract class RepositorioTicket {
  abstract verificarDia(horaIngreso: number): Boolean;
  abstract verificarHorarioTrabajo(horaIngreso: number): Boolean;
  abstract verificarHorarioDescuento(horaIngreso: number): Boolean;
  abstract async verificarDisponibilidad(horaIngreso: number): Promise<Boolean>;
  abstract async guardar(ticket: Ticket);
}
