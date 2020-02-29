import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspecialidadesVerMasComponent } from './especialidades-ver-mas.component';

const routes: Routes = [
  {
    path: '',
    data: {  key: 'especialidades/:idEspecialidad' },
    component: EspecialidadesVerMasComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialidadesVerMasRoutingModule { }
