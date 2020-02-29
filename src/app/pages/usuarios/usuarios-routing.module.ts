import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  {
    path: '',
    data: { shouldReuse: true, key: 'usuarios' },
    component: UsuariosComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
