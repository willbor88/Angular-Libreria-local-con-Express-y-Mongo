import { Component, OnInit } from '@angular/core';
import {Global} from '../../services/global';
import {ProjectService} from '../../services/projects.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
 public url: string;
 public project: Project;
 public titulo :string;
 public confirm: boolean;

  constructor(
    private _projectService:ProjectService,
    private _router: Router,
    private _route : ActivatedRoute
  ) { this.url = Global.url;
      this.titulo = '';
      this.project = new Project('', '', '', '', 2019, '', '' ) ;
      this.confirm = false;
  }

  ngOnInit() {

    this._route.params.subscribe(params =>{
      let id = params.id;
      this.getProject(id);
         })

  }

  getProject(id) {

    this._projectService.getProject(id ).subscribe(
  Response => {
this.project = Response.project;
console.log(this.project.name);
  },
  error => {

    console.log(error as any);
  } );

  }

  deleteProject(id){

this._projectService.deleteProject(id).subscribe(

  response =>{
if(response.project){
this._router.navigate(['/Proyecto']);

}

  },
error =>{
  console.log(error as any);
}
);
  }

setConfirm(confirm){
this.confirm = confirm;

}

}
