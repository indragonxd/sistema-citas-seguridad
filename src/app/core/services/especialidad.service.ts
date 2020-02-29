import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  especialidades:Especialidad []
  constructor(private http: HttpClient) { 
    /*this.especialidades = [
      {
        _id:'23',
        nombre:'Traumatologia',
        numConsultorio:3,
        descripcion:'Es la rama de la medicina que se dedica al estudio de las lesiones del aparato locomotor. La especialidad es médico-quirúrgica, y los médicos que la practican se llaman traumatólogos o cirujanos ortopédicos. Su ámbito se extiende más allá del campo de las lesiones traumáticas; abarca el estudio de las enfermedades congénitas o adquiridas que afectan al aparato locomotor, especialmente de aquellas que precisan tratamiento con cirugía, prótesis u ortesis'
      },
      {
        _id:'21',
        nombre:'Oftalmologia',
        numConsultorio:3,
        descripcion:'La Oftalmología (del griego ὀφθαλμός [opthalmós], ‘ojo’, y el sufijo -logía, ‘tratado’, ‘estudio’, ‘ciencia’, y este del prefijo griego -λογία [loguía])1​2​ es la especialidad médica que estudia las enfermedades de ojo y su tratamiento, incluyendo el globo ocular, su musculatura, el sistema lagrimal y los párpados'
      },
      {
        _id:'23',
        nombre:'Traumatologia',
        numConsultorio:3,
        descripcion:'Es la rama de la medicina que se dedica al estudio de las lesiones del aparato locomotor. La especialidad es médico-quirúrgica, y los médicos que la practican se llaman traumatólogos o cirujanos ortopédicos. Su ámbito se extiende más allá del campo de las lesiones traumáticas; abarca el estudio de las enfermedades congénitas o adquiridas que afectan al aparato locomotor, especialmente de aquellas que precisan tratamiento con cirugía, prótesis u ortesis'
      },
      {
        _id:'23',
        nombre:'Traumatologia',
        numConsultorio:3,
        descripcion:'Es la rama de la medicina que se dedica al estudio de las lesiones del aparato locomotor. La especialidad es médico-quirúrgica, y los médicos que la practican se llaman traumatólogos o cirujanos ortopédicos. Su ámbito se extiende más allá del campo de las lesiones traumáticas; abarca el estudio de las enfermedades congénitas o adquiridas que afectan al aparato locomotor, especialmente de aquellas que precisan tratamiento con cirugía, prótesis u ortesis'
      },
      {
        _id:'23',
        nombre:'Traumatologia',
        numConsultorio:3,
        descripcion:'Es la rama de la medicina que se dedica al estudio de las lesiones del aparato locomotor. La especialidad es médico-quirúrgica, y los médicos que la practican se llaman traumatólogos o cirujanos ortopédicos. Su ámbito se extiende más allá del campo de las lesiones traumáticas; abarca el estudio de las enfermedades congénitas o adquiridas que afectan al aparato locomotor, especialmente de aquellas que precisan tratamiento con cirugía, prótesis u ortesis'
      },
      {
        _id:'23',
        nombre:'Traumatologia',
        numConsultorio:3,
        descripcion:'Es la rama de la medicina que se dedica al estudio de las lesiones del aparato locomotor. La especialidad es médico-quirúrgica, y los médicos que la practican se llaman traumatólogos o cirujanos ortopédicos. Su ámbito se extiende más allá del campo de las lesiones traumáticas; abarca el estudio de las enfermedades congénitas o adquiridas que afectan al aparato locomotor, especialmente de aquellas que precisan tratamiento con cirugía, prótesis u ortesis'
      },
    ];*/
  }
  getEspecialidades(){
    //mediante un llmado httpcliente
    return this.http.get<Especialidad[]>('http://localhost:8080/clinica/especialidades');
    //return this.especialidades;
  }
  getEspecialidadById(idEspecialidad){
    return this.http.get<Especialidad>('http://localhost:8080/clinica/especialidades/'+ idEspecialidad);
  }
}
