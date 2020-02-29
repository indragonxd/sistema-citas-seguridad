import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargaHorarioMasivaComponent } from './carga-horario-masiva.component';

const routes: Routes = [
  {
    path: '',
    data: { shouldReuse: true, key: 'carga-masiva-horario' },
    component: CargaHorarioMasivaComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargaHorarioMasivaRoutingModule { }
