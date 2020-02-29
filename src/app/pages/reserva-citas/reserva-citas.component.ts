import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from 'src/app/core/services/especialidad.service';
import { MedicoService } from 'src/app/core/services/medico.service';
import { Router } from '@angular/router';
import { HorarioService } from 'src/app/core/services/horario.service';
import { cita } from 'src/app/interfaces/clases/cita.class';

@Component({
  selector: 'app-reserva-citas',
  templateUrl: './reserva-citas.component.html',
  styleUrls: ['./reserva-citas.component.scss']
})
export class ReservaCitasComponent implements OnInit {
  especialidades: Especialidad[];
  medicos: Medico[];
  horarios:Horario[];

  medicosFiltrados: Medico[];
  especialidadSelect:Especialidad;

  citaMedica:cita;
  medicoSelect: Medico;
  fechaCita:Date; 

  constructor(
    private especialidadService:EspecialidadService, 
    private medicoService:MedicoService, 
    private horarioService:HorarioService,
    private router: Router ) { 

    this.especialidadService.getEspecialidades().
    subscribe(data=>{
      this.especialidades=data;
    });
    this.medicoService.getMedicos().
    subscribe(data=>{
      this.medicos=data;
    });
  }
    
  ngOnInit() { }

  actualizarSelect(){
    this.medicosFiltrados = this.getMedicosFiltrados();
  }

  getMedicosFiltrados(){
    return this.medicos.filter(med => med.especialidad_id.idEspecialidad == this.especialidadSelect.idEspecialidad);
  }

  llenarTabla(){
    this.horarioService.getHorariosByIdMedico(this.medicoSelect.idMedico).
    subscribe(data => {
      this.horarios = data;
    }) 
  }

  obtenerFecha($event){
    this.fechaCita = $event.target.value;  
  }

  async generarCita(){
    this.router.navigate(['/nav/reserva-cita',this.medicoSelect.idMedico, '73524246', this.fechaCita]);
  }

}
