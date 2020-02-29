import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialidadesVerMasRoutingModule } from './especialidades-ver-mas-routing.module';
import { EspecialidadesVerMasComponent } from './especialidades-ver-mas.component';

@NgModule({
  declarations: [EspecialidadesVerMasComponent],
  imports: [
    CommonModule,
    EspecialidadesVerMasRoutingModule
  ]
})
export class EspecialidadesVerMasModule { }
