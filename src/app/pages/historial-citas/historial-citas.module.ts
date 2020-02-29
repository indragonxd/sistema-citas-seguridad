import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialCitasRoutingModule } from './historial-citas-routing.module';
import { HistorialCitasComponent } from './historial-citas.component';

@NgModule({
  declarations: [HistorialCitasComponent],
  imports: [
    CommonModule,
    HistorialCitasRoutingModule
  ]
})
export class HistorialCitasModule { }
