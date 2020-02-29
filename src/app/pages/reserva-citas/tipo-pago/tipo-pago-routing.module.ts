import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoPagoComponent } from './tipo-pago.component';

const routes: Routes = [
  {
    path: '',
    data: {  key: 'reserva-cita/:idMedico/:idPaciente/:fecha' },
    component: TipoPagoComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoPagoRoutingModule { }
