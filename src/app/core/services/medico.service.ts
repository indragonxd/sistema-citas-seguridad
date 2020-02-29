import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }

  getMedicos(){
    return this.http.get<Medico[]>('http://localhost:8080/clinica/medicos/');
  }
  getMedicoById(idMedico){
    return this.http.get<Medico>('http://localhost:8080/clinica/medicos/' + idMedico);
  }
  getMedicosByIdEspecialidad(idEspecialidad){
    return this.http.get<Medico[]>('http://localhost:8080/clinica/medicos/especialidad/' + idEspecialidad);
  }
}
