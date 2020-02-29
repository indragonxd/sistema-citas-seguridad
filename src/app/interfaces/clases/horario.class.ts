export class horario implements Horario {
  id_horario: number;
  dia: string;
  horaInicio: string;
  horaFin: string;
  constructor(public medico_id:Medico){
  }
  //https://desarrolloweb.com/articulos/clases-interfaces-servicios-angular.html
}