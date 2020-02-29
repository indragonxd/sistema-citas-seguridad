import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { 

  }
  getPacienteById(idPaciente){
    return this.http.get<Paciente>('http://localhost:8080/clinica/pacientes/' + idPaciente);
  }
}
