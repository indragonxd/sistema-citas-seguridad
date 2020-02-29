import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    NgbModule,
    FormsModule,
  ]
})
export class UsuariosModule { }
