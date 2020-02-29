import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargaHorarioManualRoutingModule } from './carga-horario-manual-routing.module';
import { CargaManualHorarioComponent } from './carga-horario-manual.component';


@NgModule({
  declarations: [CargaManualHorarioComponent],
  imports: [
    CommonModule,
    CargaHorarioManualRoutingModule
  ]
})
export class CargaHorarioManualModule { }
