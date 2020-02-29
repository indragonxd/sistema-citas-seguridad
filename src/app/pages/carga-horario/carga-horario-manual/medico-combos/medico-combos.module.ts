import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicoCombosRoutingModule } from './medico-combos-routing.module';
import { MedicoCombosComponent } from './medico-combos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MedicoCombosComponent],
  imports: [
    CommonModule,
    MedicoCombosRoutingModule,
    FormsModule
  ]
})
export class MedicoCombosModule { }
