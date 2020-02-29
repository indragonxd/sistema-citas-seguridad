export class cita implements Cita{
    tipoPago: string;
    idCita: string;    
    estado: string;
    estadoPago:boolean;
    paciente_id: Paciente;
    medico_id: Medico;
    fecha: Date;
}