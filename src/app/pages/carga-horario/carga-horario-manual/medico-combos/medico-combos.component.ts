import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HorarioService } from 'src/app/core/services/horario.service';
import { MedicoService } from 'src/app/core/services/medico.service';
import { horario } from 'src/app/interfaces/clases/horario.class';

@Component({
  selector: 'app-medico-combos',
  templateUrl: './medico-combos.component.html',
  styleUrls: ['./medico-combos.component.scss']
})
export class MedicoCombosComponent implements OnInit {
  idMedico:string;
  medico:Medico;
  horarios:Array<Horario>;
  horaInicio:string;
  horaFin:string;
  dia:string;
  horas=['08:00:00','09:00:00','10:00:00','11:00:00','12:00:00','13:00:00','14:00:00','15:00:00','16:00:00','17:00:00','18:00:00','19:00:00','20:00:00'];
  dias=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
  constructor(private route: ActivatedRoute, private horarioService:HorarioService, private medicoService:MedicoService) { }

  ngOnInit() {
    this.horarios =new Array<Horario>();
    this.idMedico = this.route.snapshot.params.idMedico;
    this.medicoService.getMedicoById(this.idMedico).subscribe(data => {
      this.medico = data;
    });
    this.horarioService.getHorariosByIdMedico(this.idMedico).subscribe( data => {
      this.horarios = data;
      console.log(this.horarios);
    });
  }
  agregarHorario(){
    let hor = new horario(this.medico);
    this.horarios.push(hor);
    console.log(this.horarios);
  }

}
