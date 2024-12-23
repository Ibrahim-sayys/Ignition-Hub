import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  newCar: any = {
    name: '',
    model: '',
    brand: '',
    status: '',
    price: null,
    image: '',
  };
  cars: any[] = [];
  brands: string[] = ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes']; // Predefined list of car brands.

  constructor(private carService: CarService) {
    this.carService.cars$.subscribe((data) => {
      this.cars = data;
    });
  }

  addCar() {
    this.carService.addCar({ ...this.newCar });
    this.newCar = {
      name: '',
      model: '',
      brand: '',
      status: '',
      price: null,
      image: '',
    };
  }

  removeCar(index: number) {
    this.carService.removeCar(index);
  }

  onImageSelect(event: any) {
    const file = event.target.files[0];
    this.newCar.image = file ? URL.createObjectURL(file) : '';
  }
}
