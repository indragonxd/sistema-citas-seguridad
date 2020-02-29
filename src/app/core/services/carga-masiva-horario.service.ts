import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargaMasivaHorarioService {

  constructor(
    protected httpClient: HttpClient
  ) {
  }

  saveData(files: File[]): Observable<any>{
    let formData: FormData  = new FormData();
    files.forEach(function(item){
        formData.append("file[]", item, item.name);
    });
    console.log(files,formData);
    return this.httpClient.post(`http://localhost:8080/carga-masivaor/horario`, formData, {responseType: 'text'});
  }

}