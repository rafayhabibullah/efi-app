import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css'],
})
export class DimensionsComponent {
  itemCount: number = 0;
  dimensions: { length: number; width: number; height: number }[] = [{ length: 0, width: 0, height: 0 }];
  totalWeightKg: number = 0;
  totalCharges: number = 0;
  perKgCharge: number = 0;

  constructor(private calculatorService: CalculatorService) {}

  addItem() {
    this.dimensions.push({ length: 0, width: 0, height: 0 });
    this.itemCount++;
  }

  removeItem(index: number) {
    this.dimensions.splice(index, 1);
    this.calculateWeight();
  }

  calculateWeight() {
    this.totalWeightKg = this.calculatorService.calculateTotalWeight(this.dimensions);
    if (this.totalWeightKg > 0) {
      this.totalCharges = this.calculatorService.calculateTotalCharges(this.totalWeightKg);
      this.perKgCharge = this.totalCharges / this.totalWeightKg;
    }
  }
}
