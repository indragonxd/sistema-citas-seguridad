import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { MedicoService } from 'src/app/core/services/medico.service';
import { CitaService } from 'src/app/core/services/cita.service';
import { Router } from '@angular/router';
import { cita } from 'src/app/interfaces/clases/cita.class';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tipo-pago',
  templateUrl: './tipo-pago.component.html',
  styleUrls: ['./tipo-pago.component.scss']
})
export class TipoPagoComponent implements OnInit {
  idPaciente: string;
  idMedico: string;
  fechaCita: Date;
  citaMedica: cita;

  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private medicoService: MedicoService,
    private citaService: CitaService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.idPaciente = this.route.snapshot.params.idPaciente;
    this.idMedico = this.route.snapshot.params.idMedico;
    this.fechaCita = this.route.snapshot.params.fecha;
  }

  async generarCita(tipo) {

    this.citaMedica = new cita();

    if (tipo == 'presencial') {

      await this.pacienteService.getPacienteById(this.idPaciente).subscribe(data => {

        this.citaMedica.paciente_id = data;

        this.medicoService.getMedicoById(this.idMedico).subscribe(data => {
          this.citaMedica.medico_id = data;
          this.citaMedica.tipoPago = 'Presencial';
          this.citaMedica.fecha = this.fechaCita;

          //POST al backend    
          this.citaService.crearCita(this.citaMedica).subscribe(data => {
            console.log(data);
            if (data != null) {
              //dialog = true;
              this.router.navigate(['/historial-citas']);
            }
          });

        })

      })
    }
  }

  volver() {
    this.router.navigate(['/reserva-cita']);
  }
  pagoOnline() {
    this.router.navigate(['/pago-online'])
  }

  enviar(modal) {
    this.modalService.open(modal);
  }

}
