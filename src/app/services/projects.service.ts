import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../models/project' ;
import {Global} from './global';




@Injectable()/*Servicio injectable*/


export class ProjectService {

public url:string;

constructor(
private _http:HttpClient
)
{
this.url = Global.url;
}


testService(){

  return 'Probando el servicio Angular';
}

saveProject(project: Project): Observable<any>{
let params = JSON.stringify(project); // Convertir a json string
let headers = new HttpHeaders().set('Content-Type', 'application/json');
return this._http.post(this.url + '/save-project', params, {headers});
  ///  save-project:Ruta para conectarse los metodos hppt del controlador del apirest
}


getProjects(): Observable<any> {
  let headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this._http.get(this.url + 'projects', {headers});

}

getProject(id):Observable<any>{

  let headers = new HttpHeaders().set('Content-Type', 'application/json');
  return this._http.get(this.url + 'project/' + id, {headers});

}

deleteProject(id):Observable<any>{
let headers = new HttpHeaders().set('Content-Type', 'application/json');
return this._http.delete(this.url + 'project/' + id, {headers});
}


}




