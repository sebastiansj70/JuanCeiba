// import { Usuario } from 'src/dominio/usuario/modelo/usuario';
import { Ticket } from 'src/dominio/ticket/modelo/ticket';
import { ErrorLongitudInvalida } from 'src/dominio/errores/error-longitud-invalida';
import { ErrorDiaTRabajo } from 'src/dominio/errores/error-dia-trabajo';
import { ErrorHoraioTrabajo } from 'src/dominio/errores/error-horario-trabajo';
import { ErrorDescuento } from 'src/dominio/errores/error-descuento';
import { RepositorioTicketMysql } from 'src/infraestructura/ticket/adaptador/repositorio/repositorio-ticket-mysql'


describe('Ticket', () => {

    const _Ticket = Ticket as any;

    it('si el dia de registro es lunes error', () => {
        return expect(async () => new _Ticket(32165452, 'Juan', 1625484600000, 1625484600000, 1, 50000))
            .rejects
            .toStrictEqual(new ErrorDiaTRabajo('El dia lunes no se permite el ingreso'));
    });

    it('el dia de registro es diferente a lunes', () => {
        const ticket = new _Ticket(32165452, 'Juan', 1626370200000, 1626370200000, 1, 50000)

        expect(ticket.telefonoUsuario).toEqual(32165452);
        expect(ticket.nombreUsuario).toEqual('Juan');
        expect(ticket.horaIngreso).toEqual(1626370200000);
        expect(ticket.horaSalida).toEqual(1626370200000);
        expect(ticket.idCancha).toEqual(1);
        expect(ticket.valor).toEqual(50000);
    });

    it('si el horario esta fuera del rango', () => {
        return expect(async () => new _Ticket(32165452, 'Juan', 1626334200000, 1626334200000, 1, 50000))
            .rejects
            .toStrictEqual(new ErrorHoraioTrabajo('El horario de trabajo es de las 8:00 hasta las 20:00'));
    });


    it('si el horario dentro del rango', () => {
        const ticket = new _Ticket(32165452, 'Juan', 1626370200000, 1626370200000, 1, 50000)

        expect(ticket.telefonoUsuario).toEqual(32165452);
        expect(ticket.nombreUsuario).toEqual('Juan');
        expect(ticket.horaIngreso).toEqual(1626370200000);
        expect(ticket.horaSalida).toEqual(1626370200000);
        expect(ticket.idCancha).toEqual(1);
        expect(ticket.valor).toEqual(50000);
    });


    it('ticket sin descuento', () => {
        return expect(async () => new _Ticket(32165452, 'Juan', 1626363000000, 1626363000000, 1, 50000))
            .rejects
            .toStrictEqual(new ErrorDescuento('El descuento solo se aplica de las 12:00 a 14:00'));
    });

    it('ticket con descuento', () => {
        const ticket = new _Ticket(32165452, 'Juan', 1626373800000, 1626373800000, 1, 50000)

        expect(ticket.telefonoUsuario).toEqual(32165452);
        expect(ticket.nombreUsuario).toEqual('Juan');
        expect(ticket.horaIngreso).toEqual(1626373800000);
        expect(ticket.horaSalida).toEqual(1626373800000);
        expect(ticket.idCancha).toEqual(1);
        expect(ticket.valor).toEqual(50000);
    });

});
