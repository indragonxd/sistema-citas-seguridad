import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicoCombosComponent } from './medico-combos.component';

const routes: Routes = [
  {
    path: '',
    data: { key: 'carga-manual-horario/:idMedico' },
    component: MedicoCombosComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoCombosRoutingModule { }
