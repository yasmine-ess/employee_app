import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss'
})
export class EmployeeFormComponent implements OnInit {
  isEditMode = false;
  employee: Omit<Employee, 'id'> = {
    name: '',
    email: '',
    department: '',
    salary: 0
  };
  employeeId!: number;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute //permet de lire l'url si l'url est employee/edit/2 il recupere le 2
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true; // si on a un id dans l'url alors on est en mode édition
      this.employeeId = +id; // le + devant id convertit la chaîne  ex : "2" en nombre 2
      const found = this.employeeService.getById(this.employeeId);
      if (found) {
        this.employee = { ...found };
      }
    }
  }

  save(): void {
    if (this.isEditMode) {
      this.employeeService.update({ id: this.employeeId, ...this.employee });
    } else {
      this.employeeService.add(this.employee);
    }
    this.router.navigate(['/employees']); //redirige vers la liste après sauvegarde, comme un Response.Redirect en ASP.NET !
  }

  cancel(): void {
    this.router.navigate(['/employees']);
  }
}