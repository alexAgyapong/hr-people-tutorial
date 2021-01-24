import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../shared/models/employee';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees$ = this.employeeService.getEmployees();
  }

}
