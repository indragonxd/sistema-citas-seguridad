import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from 'src/app/core/services/especialidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.scss']
})
export class EspecialidadesComponent implements OnInit {

  especialidades : Especialidad[];
  
  constructor(private especialidadService:EspecialidadService, private router:Router) { }

  ngOnInit() {
    this.especialidadService.getEspecialidades().
    subscribe(data=>{
      this.especialidades=data;
    })
  }

  verDoctores(idEspecialidad){
    this.router.navigate(['/especialidades', idEspecialidad]);
  }

}
