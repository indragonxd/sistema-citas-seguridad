import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  horarios:Horario[];
  constructor(private http: HttpClient) { }

  getHorariosByIdMedico(medicoId){
    return this.http.get<Horario[]>('http://localhost:8080/clinica/horarios/medico/' + medicoId);
  }
}