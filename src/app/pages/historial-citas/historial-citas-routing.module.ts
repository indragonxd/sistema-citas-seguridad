import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorialCitasComponent } from './historial-citas.component';

const routes: Routes = [
  {
    path: '',
    data: { shouldReuse: true, key: 'historial-citas' },
    component: HistorialCitasComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialCitasRoutingModule { }
