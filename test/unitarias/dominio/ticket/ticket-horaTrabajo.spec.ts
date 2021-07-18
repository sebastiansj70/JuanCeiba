import { Ticket } from 'src/dominio/ticket/modelo/ticket';
import { ErrorHoraioTrabajo } from 'src/dominio/errores/error-horario-trabajo';


describe('Ticket', () => {

    // Arrange  => inicializa los objetos
    const _Ticket = Ticket as any;

    //Act => realiza la llamada al método a probar con los parámetros preparados para tal fin.
    it('si el horario esta fuera del rango', () => {
        return expect(async () => new _Ticket(32165452, 'Juan', 1626334200000, 1626334200000, 1, 50000))
            .rejects
            .toStrictEqual(new ErrorHoraioTrabajo('El horario de trabajo es de las 8:00 hasta las 20:00'));
    });

    //Assert => comprueba que el método de pruebas ejecutado se comporta tal y como teníamos previsto que lo hiciera.
    it('si el horario dentro del rango', () => {
        const ticket = new _Ticket(32165452, 'Juan', 1626370200000, 1626370200000, 1, 50000)

        expect(ticket.telefonoUsuario).toEqual(32165452);
        expect(ticket.nombreUsuario).toEqual('Juan');
        expect(ticket.horaIngreso).toEqual(1626370200000);
        expect(ticket.horaSalida).toEqual(1626370200000);
        expect(ticket.idCancha).toEqual(1);
        expect(ticket.valor).toEqual(50000);
    });
});
