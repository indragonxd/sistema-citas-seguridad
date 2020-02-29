import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaCitasComponent } from './reserva-citas.component';

const routes: Routes = [
  {
    path: '',
    data: { shouldReuse: true, key: 'reserva-citas' },
    component: ReservaCitasComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaCitasRoutingModule { }
