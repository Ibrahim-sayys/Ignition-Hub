import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-catagories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css'],
})
export class CatagoriesComponent {
  cars: any[] = [];
  filteredCars: any[] = [];
  filters = { brand: '', status: '' };
  brands: string[] = [];

  constructor(private carService: CarService) {
    this.carService.cars$.subscribe((data) => {
      this.cars = data;
      this.brands = Array.from(new Set(data.map((car) => car.brand)));
      this.filteredCars = [...this.cars];
    });
  }

  applyFilters() {
    this.filteredCars = this.cars.filter(
      (car) =>
        (!this.filters.brand || car.brand === this.filters.brand) &&
        (!this.filters.status || car.status === this.filters.status)
    );
  }

  clearFilters() {
    this.filters = { brand: '', status: '' };
    this.filteredCars = [...this.cars];
  }

  buyCar(car: any) {
    alert(`${car.name} purchased successfully!`);
    this.carService.removeCarByName(car.name);
  }
}
