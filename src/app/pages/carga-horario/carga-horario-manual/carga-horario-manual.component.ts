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
  constructor(private medicoService:MedicoService , private router:Router) { }

  ngOnInit() {
    this.medicoService.getMedicos().
    subscribe(data=>{
      this.medicos=data;
    })
  }
  editarHorario(idMedico){
    this.router.navigate(['/carga-manual-horario',idMedico]);
  }

}