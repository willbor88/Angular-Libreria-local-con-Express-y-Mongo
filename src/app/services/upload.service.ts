'use strict';

import {Injectable} from '@angular/core';
import {Global} from './global';


@Injectable()

export class UploadService{

  public url: string;

 constructor() {
this.url = Global.url;
 }

makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string) {

return new Promise((resolve, reject) => {
var formData: any = new FormData();

console.log('Metodo makeFileRequest:' );



for (let i = 0; i < files.length; i++) {
formData.append(name, files[i], files[i].name );

}


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {

if (xhr.readyState === 4) {
 if (xhr.status === 200) {
console.log(xhr.response);//Ver la response
resolve(JSON.parse(xhr.response)); // Convertir a json string la response

 } else {
  reject(xhr.response);
 }

}

};
xhr.open('POST', url, true);
xhr.send(formData);

});

}
}
