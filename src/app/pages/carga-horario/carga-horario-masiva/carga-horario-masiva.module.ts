import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargaHorarioMasivaRoutingModule } from './carga-horario-masiva-routing.module';
import { CargaHorarioMasivaComponent } from './carga-horario-masiva.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
@NgModule({
  declarations: [CargaHorarioMasivaComponent],
  imports: [
    CommonModule,
    CargaHorarioMasivaRoutingModule,
    NgxDropzoneModule
  ]
})
export class CargaHorarioMasivaModule { }
