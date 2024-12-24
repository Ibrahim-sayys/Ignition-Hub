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
  showBuyForm = false;
  selectedCar: any = null;
  buyerDetails = { name: '', age: null, id: '' };

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

  openBuyForm(car: any) {
    this.selectedCar = car;
    this.showBuyForm = true;
  }

  closeBuyForm() {
    this.showBuyForm = false;
    this.buyerDetails = { name: '', age: null, id: '' };
  }

  submitBuyForm() {
    alert(
      `${this.buyerDetails.name}, your purchase of ${this.selectedCar.name} was successful!`
    );
    this.carService.removeCarByName(this.selectedCar.name);
    this.closeBuyForm();
  }
}
