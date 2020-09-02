import { Injectable, Input } from '@angular/core';
import { Project } from './project';
import { HttpClient} from '@angular/common/http';
import { Observable, } from 'rxjs';
import { employees } from './employees';






@Injectable({
  providedIn: 'root'
})




export class ProjsService {
private projectsUrl='api/projects';
private employeesUrl='api/employees';




  constructor(private http : HttpClient) { }


getEmployees() : Observable <employees[]> { 
  return this.http.get<employees[]>(this.employeesUrl);
}

  getProjects () : Observable <Project[]>{
    return this.http.get<Project[]>(this.projectsUrl);
  }



}

