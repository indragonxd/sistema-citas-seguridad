import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaCitasRoutingModule } from './reserva-citas-routing.module';
import { ReservaCitasComponent } from './reserva-citas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReservaCitasComponent],
  imports: [
    CommonModule,
    ReservaCitasRoutingModule,
    FormsModule
  ]
})
export class ReservaCitasModule { }
