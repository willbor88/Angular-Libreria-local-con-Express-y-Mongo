import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project' ;
import {ProjectService} from '../../services/projects.service';
import {Global} from '../../services/global';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

public projects: Project []; // Array con modelos tipo Project
public url: string;
  constructor(
private _projectService: ProjectService,

  ) {
    this.url = Global.url;
   }

  ngOnInit() {
    this.getProjects();

  }
  getProjects() {
  this._projectService.getProjects().subscribe(
      response => {
      if (response.projects) {
      this.projects = response.projects;
      console.log(response.projects);
      }
    },
    error => {
  console.log(error as any );
    }
    );
  }



 }

