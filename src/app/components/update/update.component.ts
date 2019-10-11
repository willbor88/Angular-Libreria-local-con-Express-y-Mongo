import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/projects.service';
import {Project} from '../../models/project';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UploadService} from '../../services/upload.service';
import {Global} from '../../services/global';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [ProjectService,UploadService]
})
export class UpdateComponent implements OnInit {
  public project: Project;
  public string: string;
  public saveProject:Project;
  public status: string;
  public filesToUpload:Array <File>;
  public url:string;
  constructor(
    public _projectService: ProjectService,
    private _router: Router,
    public _route:ActivatedRoute,
    public _uploadService:UploadService,

  ) {
    this.url = Global.url;
    this.project = new Project('', '', '', '', 2019, '', '' ) ;

   }

  ngOnInit() {
    this._route.params.subscribe(params =>{
      let id = params.id;
      console.log(id);
      this.getProject(params.id);
         }),

         this.string = 'willbor';

  }
getProject(id){

this._projectService.getProject(id).subscribe(
response =>{
this.project = response.project;
console.log(response.project);
},
error =>{
  console.log(error as any);

}

);

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
