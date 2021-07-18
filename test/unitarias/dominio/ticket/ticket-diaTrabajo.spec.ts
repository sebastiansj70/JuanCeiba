import { Ticket } from 'src/dominio/ticket/modelo/ticket';
import { ErrorDiaTRabajo } from 'src/dominio/errores/error-dia-trabajo';


describe('Ticket', () => {

    // Arrange  => inicializa los objetos
    const _Ticket = Ticket as any;

    //Act => realiza la llamada al método a probar con los parámetros preparados para tal fin.
    it('si el dia de registro es lunes error', () => {
        return expect(async () => new _Ticket(32165452, 'Juan', 1625484600000, 1625484600000, 1, 50000))
            .rejects
            .toStrictEqual(new ErrorDiaTRabajo('El dia lunes no se permite el ingreso'));
    });

    //Assert => comprueba que el método de pruebas ejecutado se comporta tal y como teníamos previsto que lo hiciera.
    it('el dia de registro es diferente a lunes', () => {
        const ticket = new _Ticket(32165452, 'Juan', 1626370200000, 1626370200000, 1, 50000)

        expect(ticket.telefonoUsuario).toEqual(32165452);
        expect(ticket.nombreUsuario).toEqual('Juan');
        expect(ticket.horaIngreso).toEqual(1626370200000);
        expect(ticket.horaSalida).toEqual(1626370200000);
        expect(ticket.idCancha).toEqual(1);
        expect(ticket.valor).toEqual(50000);
    });

});
