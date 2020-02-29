import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoPagoRoutingModule } from './tipo-pago-routing.module';
import { TipoPagoComponent } from './tipo-pago.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TipoPagoComponent],
  imports: [
    CommonModule,
    TipoPagoRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class TipoPagoModule { }
