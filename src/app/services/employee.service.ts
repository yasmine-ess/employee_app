import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import employeesData from '../data/employees.json'; // Import des données depuis un fichier JSON  (le fichier employee.json)

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = employeesData; // la on met les données dans une variable employees et on utilise les données du fichier json 
  private nextId = 4;

  // READ - récupérer tous les employés
  getAll(): Employee[] {
    return this.employees;
  }

  // READ - récupérer un seul employé par son id
  getById(id: number): Employee | undefined {
    return this.employees.find(e => e.id === id);
  }

  // CREATE - ajouter un nouvel employé
  add(employee: Omit<Employee, 'id'>): void {
    this.employees.push({ id: this.nextId++, ...employee });
  }

  // UPDATE - modifier un employé existant
  update(updated: Employee): void {
    const index = this.employees.findIndex(e => e.id === updated.id);
    if (index !== -1) this.employees[index] = updated;
  }

  // DELETE - supprimer un employé
  delete(id: number): void {
    this.employees = this.employees.filter(e => e.id !== id);
  }
}
