import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService , private router: Router) {}
 // ngOnInit est une méthode qui s'exécute automatiquement quand le composant se charge , comme page_load en asp.net

  ngOnInit(): void {
    //afficher tout les employés dès le chargement du composant
    this.employees = this.employeeService.getAll(); 
  }
  goToAdd(): void {
    this.router.navigate(['/employees/add']);
  }

  goToEdit(id: number): void {
    this.router.navigate(['/employees/edit', id]);
  }
 // la méthode delete est appelée quand on clique sur le bouton supprimer d'un employé , elle prend l'id de l'employé à supprimer en paramètre
  delete(id: number): void { 
    this.employeeService.delete(id);
    this.employees = this.employeeService.getAll();
  }
}