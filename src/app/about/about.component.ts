import { Component, OnInit } from '@angular/core';
import { employees } from '../employees';
import { ProjsService } from '../projs.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

employees:employees[];

  constructor(private projservice : ProjsService) { }


  getEmployees(): void {
    this.projservice.getEmployees().subscribe(employees=>this.employees=employees);
  }
  ngOnInit() {
    this.getEmployees();
  }

}
