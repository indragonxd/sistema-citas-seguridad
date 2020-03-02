import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/core/services/medico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carga-manual-horario',
  templateUrl: './carga-horario-manual.component.html',
  styleUrls: ['./carga-horario-manual.component.scss']
})
export class CargaManualHorarioComponent implements OnInit {
  medicos: Medico[];
  dni:string;
  constructor(private medicoService:MedicoService , private router:Router) { }

  ngOnInit() {
    this.medicoService.getMedicos().
    subscribe(data=>{
      this.medicos=data;
    });
    this.dni = localStorage.getItem('dniPaciente');
  }
  editarHorario(idMedico){
    this.router.navigate(['/nav/'+this.dni+'/carga-manual-horario',idMedico]);
  }

}