import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/core/services/cita.service';

@Component({
  selector: 'app-historial-citas',
  templateUrl: './historial-citas.component.html',
  styleUrls: ['./historial-citas.component.scss']
})
export class HistorialCitasComponent implements OnInit {

  citas: Cita[];
  constructor(private citaService:CitaService) { }

  ngOnInit() {
    this.citaService.getCitas("73524246").
    subscribe(data=>{
      this.citas=data;
    })
  }
  /*estadoPago(estado): String{
    return estado==true?'Pagado':'Pendiente';
  }*/

}
