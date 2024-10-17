import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-pickup-rate',
  templateUrl: './pickup-rate.component.html',
  styleUrls: ['./pickup-rate.component.css'],
})
export class PickupRateComponent {
  weight: number = 0;
  rate: number = 0;
  totalAmount: number = 0;

  constructor(private calculatorService: CalculatorService) {}

  calculateRate() {
    this.rate = this.calculatorService.calculatePickupRate(this.weight);
    this.totalAmount = this.rate * this.weight;
  }
}
