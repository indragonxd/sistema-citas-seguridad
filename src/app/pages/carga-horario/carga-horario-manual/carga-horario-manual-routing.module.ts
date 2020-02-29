import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargaManualHorarioComponent } from './carga-horario-manual.component';


const routes: Routes = [
  {
    path: '',
    data: { shouldReuse: true, key: 'carga-manual-horario' },
    component: CargaManualHorarioComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargaHorarioManualRoutingModule { }
