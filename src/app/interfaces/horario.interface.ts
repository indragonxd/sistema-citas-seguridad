interface Horario {
  id_horario?:number;
  dia:string;
  horaInicio:string;
  horaFin:string;
  medico_id:Medico;
}