import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private carsSubject = new BehaviorSubject<any[]>([]);
  cars$ = this.carsSubject.asObservable();

  constructor() {
    // Initial set of cars
    const initialCars = [
      {
        name: 'Corolla',
        model: '2020',
        brand: 'Toyota',
        status: 'new',
        price: 20000,
        image: '',
      },
      {
        name: 'Civic',
        model: '2021',
        brand: 'Honda',
        status: 'used',
        price: 18000,
        image: '',
      },
    ];
    this.carsSubject.next(initialCars);
  }

  addCar(car: any) {
    const currentCars = this.carsSubject.getValue();
    this.carsSubject.next([...currentCars, car]);
  }

  removeCar(index: number) {
    const currentCars = this.carsSubject.getValue();
    currentCars.splice(index, 1);
    this.carsSubject.next([...currentCars]);
  }

  removeCarByName(name: string) {
    const currentCars = this.carsSubject.getValue();
    const updatedCars = currentCars.filter((car) => car.name !== name);
    this.carsSubject.next(updatedCars);
  }
}
