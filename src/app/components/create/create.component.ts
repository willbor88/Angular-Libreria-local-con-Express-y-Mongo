import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/projects.service';
import {UploadService} from '../../services/upload.service';
import {Global} from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers :[ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array <File>;
  public saveProject;
  constructor(
  private _projectService: ProjectService,
  private _uploadService: UploadService

  ) {

    this.title = 'Crear Proyecto';
    this.project = new Project('', '', '', '', 2019, '', '' ) ;

  }

  ngOnInit() {
  }

  onSubmit(Form) {

console.log(this.project );
this._projectService.saveProject(this.project).subscribe(

response => {

  if (response.project) {
    console.log(response);

    this._uploadService.makeFileRequest( Global.url + 'upload-image/' + response.project._id, [], this.filesToUpload, 'image')
    // image:es el parametro vinculado con el input tipo file llamado: image.
    .then((result: any) => {
      this.saveProject = result.project;
      console.log(this.saveProject._id);
    this.status = 'success';
    Form.reset();

});
  } else {

    this.status = 'failed';
  }

},
error =>{
  console.log(error);
  console.log('este es el error');
}

);


  }

  fileChangeEvent(ObjetoImput: any) {
    console.log(ObjetoImput);
    this.filesToUpload = ObjetoImput.target.files as Array<File>;
    for (const i of this.filesToUpload) {
  console.log(this.filesToUpload);
}
     }

}
