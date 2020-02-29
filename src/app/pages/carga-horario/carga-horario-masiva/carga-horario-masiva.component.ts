import { Component,OnInit } from '@angular/core';
import { CargaMasivaHorarioService } from 'src/app/core/services/carga-masiva-horario.service';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
interface ConfigCargaMiscVisa{
  accept: string,
  multiple: boolean,
  maxFileSize?: number,
  expandable?: boolean,
  loading?: boolean,
  class?: string,
}
@Component({
  selector: 'app-carga-horario-masiva',
  templateUrl: './carga-horario-masiva.component.html',
  styleUrls: ['./carga-horario-masiva.component.scss']
})
export class CargaHorarioMasivaComponent implements OnInit {


    files: File[] = [];
    cargando: boolean = false;
    configCargaMisc: ConfigCargaMiscVisa={
      accept: '.xlsx',
      multiple: true,
      maxFileSize: 20971520, //20MB
      expandable: true,
      loading: false,
      class: 'fa-cloud-upload'
    }
  
  
    
    filesNamesAdded: string[] = [];
  
    constructor(
      private cargaMasivaHorarioService: CargaMasivaHorarioService
    ){
    }
    
    ngOnInit(){}
    onSelect(event: NgxDropzoneChangeEvent) {
      console.log(event);
      //Evita añadir repetidos
      event.addedFiles.filter(e=>{
        if(this.filesNamesAdded.indexOf(e.name)==-1){
            this.files.push(e);
            this.filesNamesAdded.push(e.name);
        }else{
          //this.toasterService.error(MESSAGE_BODY_CARGA_DUPLICADA_ERROR.replace('name',e.name),MESSAGE_TITLE_CARGA_ERROR);
        }
      });
    }
  
    onRemove(event) {
      console.log(event);
      //Remueve el archivo
      this.files.splice(this.filesNamesAdded.indexOf(event.name), 1);
      //removeElementArr(this.filesNamesAdded,event.name);
      this.files.splice(this.files.indexOf(event), 1);
    }
  
    cargarArchivo(){
      this.configCargaMisc.loading = true;
      this.cargaMasivaHorarioService.saveData(this.files).
      subscribe(data=>{
        console.log("cargo", data)
      })
    }

}
