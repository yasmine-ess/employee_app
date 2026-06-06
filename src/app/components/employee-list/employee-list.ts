import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  searchText = '';

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getAll();
    if (history.state?.success) {
      this.showSuccessToast();
    }
  }

  get filteredEmployees(): Employee[] {
    return this.employees.filter(e =>
      e.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
get totalEmployees(): number {
  return this.employees.length;
}
//reduce() → additionne tous les salaires, comme un SUM en SQL
//new Set() → supprime les doublons automatiquement — si 3 employés sont en "Informatique", Set ne le compte qu'une fois !
get averageSalary(): number {
  if (this.employees.length === 0) return 0;
  const total = this.employees.reduce((sum, e) => sum + e.salary, 0);
  return Math.round(total / this.employees.length);
}

get totalDepartments(): number {
  return new Set(this.employees.map(e => e.department)).size;
}
  goToAdd(): void {
    this.router.navigate(['/employees/add']);
  }

  goToEdit(id: number): void {
    this.router.navigate(['/employees/edit', id]);
  }

  delete(employee: Employee): void {
    Swal.fire({
      title: 'Confirmer la suppression',
      html: `Voulez-vous supprimer <strong>${employee.name}</strong> ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EF4444',
      cancelButtonColor: '#6B7280',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.delete(employee.id);
        this.employees = [...this.employeeService.getAll()];
        this.cdr.detectChanges();
        this.showSuccessToast();
      }
    });
  }

  private showSuccessToast(): void {
    Swal.fire({
      toast: true,
      position: 'top',
      icon: 'success',
      title: 'Opération effectuée avec succès !',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true
    });
  }
  goToDetail(id: number): void {
  this.router.navigate(['/employees/detail', id]);
}
}