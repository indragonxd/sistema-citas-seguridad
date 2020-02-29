import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { MedicoService } from 'src/app/core/services/medico.service';
import { EspecialidadService } from 'src/app/core/services/especialidad.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[];
  perfiles: string[] = ['Paciente', 'Administrador', 'Médico'];
  perfilSelect: string;
  dni: string;
  medicos: Medico[];
  especialidades: Especialidad[];
  especialidadSelect: Especialidad;

  constructor(
    private usuarioService: UsuarioService,
    private pacienteService: PacienteService,
    private medicoService: MedicoService,
    private especialidadService: EspecialidadService,
    private router: Router,
    private location: Location,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.getUsuarios().
      subscribe(data => {
        this.usuarios = data;
      })
  }

  saveUsuario(usuarioForm: NgForm) {

    if (this.perfilSelect == 'Paciente') {
      let user: Usuario = {
        dni: this.dni,
        perfil: this.perfilSelect,
        password: usuarioForm.value.password
      }

      let paciente: Paciente = {
        dni: this.dni,
        nombres: usuarioForm.value.nombres,
        apellidoPaterno: usuarioForm.value.apellidoPaterno,
        apellidoMaterno: usuarioForm.value.apellidoMaterno,
        sexo: usuarioForm.value.sexo,
        estadoCivil: usuarioForm.value.estadoCivil,
        direccion: usuarioForm.value.direccion
      }

      //this.paciente.email = usuarioForm.value.correo;
      this.usuarioService.saveUsuario(user).subscribe(data => {
        console.log(data);
      });
      this.pacienteService.savePaciente(paciente).subscribe(data => {
        console.log(data);

      })
    }

    if (this.perfilSelect == 'Médico') {
      let medico: Medico = {
        idMedico: 100,
        nombres: usuarioForm.value.nombres,
        apellidoPaterno: usuarioForm.value.apellidoPaterno,
        apellidoMaterno: usuarioForm.value.apellidoMaterno,
        imageURL: usuarioForm.value.url,
        especialidad_id: this.especialidadSelect
      }

      this.medicoService.saveMedico(medico).subscribe(data =>
        console.log(data)
      )
    }

    if (this.perfilSelect == 'Administrador') {
      let user: Usuario = {
        dni: this.dni,
        perfil: this.perfilSelect,
        password: usuarioForm.value.password
      }
      this.usuarioService.saveUsuario(user).subscribe(data => {
        console.log(data);

      });
    }
  }

  enviar(modal) {
    this.modalService.open(modal);
  }

  actualizarModal() {

    if (this.perfilSelect == 'Paciente') { }
    if (this.perfilSelect == 'Médico') {
      this.getEspecialidades();
    }
  }

  getEspecialidades() {
    return this.especialidadService.getEspecialidades()
      .subscribe(data => {
        this.especialidades = data;
      })
  }
}
