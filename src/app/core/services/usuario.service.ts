import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {

  }
  getUsuarioById(idUsuario) {
    return this.http.get<Usuario>('http://localhost:8080/clinica/usuarios/' + idUsuario);
  }
  getUsuarios() {
    return this.http.get<Usuario[]>('http://localhost:8080/clinica/usuarios');
  }
  saveUsuario(usuario: Usuario) {
    return this.http.post<Usuario>('http://localhost:8080/clinica/usuarios/', usuario);
  }
}
