import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';

import { Project } from '../project';
import { ProjsService } from '../projs.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  
})
export class ProjectsComponent implements OnInit {

projects: Project[];



  constructor(private projservice :ProjsService ) { }

getProjects () : void {
this.projservice.getProjects().subscribe(projects => this.projects = projects);


}
 
  ngOnInit() {
  this.getProjects();
  }

}
