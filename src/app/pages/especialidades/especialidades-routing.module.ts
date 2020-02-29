import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspecialidadesComponent } from './especialidades.component';

const routes: Routes = [
  {
    path: '',
    data: { shouldReuse: true, key: 'especialidades' },
    component: EspecialidadesComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialidadesRoutingModule { }
