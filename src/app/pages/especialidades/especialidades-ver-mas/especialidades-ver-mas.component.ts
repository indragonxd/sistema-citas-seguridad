import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from 'src/app/core/services/medico.service';
import { EspecialidadService } from 'src/app/core/services/especialidad.service';

@Component({
  selector: 'app-especialidades-ver-mas',
  templateUrl: './especialidades-ver-mas.component.html',
  styleUrls: ['./especialidades-ver-mas.component.scss']
})
export class EspecialidadesVerMasComponent implements OnInit {

  idEspecialidad : string;
  medicos : Medico[];
  especialidad : Especialidad;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private medicoService:MedicoService ,
    private especialidadService:EspecialidadService) { }

  ngOnInit() {
    this.idEspecialidad = this.route.snapshot.params.idEspecialidad;
    
    this.especialidadService.getEspecialidadById(this.idEspecialidad).
    subscribe(data=>{
      this.especialidad=data;
    })

    this.medicoService.getMedicosByIdEspecialidad(this.idEspecialidad).
    subscribe(data=>{
      this.medicos=data;
    })

  }
  volver(){
    this.router.navigate(['/especialidades']);
  }
  reservarCita(){
    this.router.navigate(['/reserva-cita']);
  }

}
