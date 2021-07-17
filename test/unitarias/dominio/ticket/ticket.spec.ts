// import { Usuario } from 'src/dominio/usuario/modelo/usuario';
import { Ticket } from 'src/dominio/ticket/modelo/ticket';
import { ErrorLongitudInvalida } from 'src/dominio/errores/error-longitud-invalida';
import { ErrorDiaTRabajo } from 'src/dominio/errores/error-dia-trabajo';
import { ErrorHoraioTrabajo } from 'src/dominio/errores/error-horario-trabajo';
import { RepositorioTicketMysql } from 'src/infraestructura/ticket/adaptador/repositorio/repositorio-ticket-mysql'


describe('Ticket', () => {

    const _Ticket = Ticket as any;

    it('si el dia de registro es lunes error', () => {
        return expect(async () => new _Ticket(32165452, 'Juan', 1625484600000, 1625484600000, 1, 50000))
            .rejects
            .toStrictEqual(new ErrorDiaTRabajo('El dia lunes no se permite el ingreso'));
    });

    it('el dia de registro es diferente a lunes', () => {
        const ticket = new _Ticket(32165452, 'Juan', 1625571000000, 1625571000000, 1, 50000)

        expect(ticket.telefonoUsuario).toEqual(32165452);
        expect(ticket.nombreUsuario).toEqual('Juan');
        expect(ticket.horaIngreso).toEqual(1625571000000);
        expect(ticket.horaSalida).toEqual(1625571000000);
        expect(ticket.idCancha).toEqual(1);
        expect(ticket.valor).toEqual(50000);
    });



});
