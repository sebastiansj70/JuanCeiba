import { Ticket } from 'src/dominio/ticket/modelo/ticket';
import { ErrorDescuento } from 'src/dominio/errores/error-descuento';


describe('Ticket', () => {

    // Arrange  => inicializa los objetos
    const _Ticket = Ticket as any;

    //Act => realiza la llamada al método a probar con los parámetros preparados para tal fin.
    it('ticket sin descuento', () => {
        return expect(async () => new _Ticket(32165452, 'Juan', 1626363000000, 1626363000000, 1, 50000))
            .rejects
            .toStrictEqual(new ErrorDescuento('El descuento solo se aplica de las 12:00 a 14:00'));
    });


    //Assert => comprueba que el método de pruebas ejecutado se comporta tal y como teníamos previsto que lo hiciera.
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
