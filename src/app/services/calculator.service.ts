import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private processingFees = 135; // Fixed processing fee
  private customFees = 50; // Fixed custom fee

  constructor() {}

  // Calculate total weight
  calculateTotalWeight(dimensions: { length: number; width: number; height: number }[]) {
    let totalWeightKg = 0;
    dimensions.forEach((dimension) => {
      const { length, width, height } = dimension;
      totalWeightKg += (length * width * height) / 366; // Convert cubic inches to kg
    });
    return totalWeightKg;
  }

  // Calculate pickup rate based on weight
  calculatePickupRate(weight: number) {
    return this.getRateFromWeight(weight);
  }

  // Get rate based on weight
  private getRateFromWeight(weight: number) {
    if (weight < 350) {
      return 300; // minimum charge
    } else if (weight < 500) {
      return (1 - ((weight - 350) / 150) * 0.10); // $1/kg to $0.90/kg
    } else if (weight < 1000) {
      return (0.90 - ((weight - 500) / 500) * 0.20); // $0.90/kg to $0.70/kg
    } else if (weight < 2000) {
      return (0.70 - ((weight - 1000) / 1000) * 0.10); // $0.70/kg to $0.60/kg
    } else if (weight < 3000) {
      return (0.60 - ((weight - 2000) / 1000) * 0.10); // $0.60/kg to $0.50/kg
    } else if (weight < 5000) {
      return (0.50 - ((weight - 3000) / 2000) * 0.10); // $0.50/kg to $0.40/kg
    } else if (weight < 12000) {
      return (0.40 - ((weight - 5000) / 7000) * 0.10); // $0.40/kg to $0.30/kg
    }
    return 0;
  }

  // Calculate total charges including processing and custom fees
  calculateTotalCharges(weight: number) {
    const pickupRate = this.calculatePickupRate(weight);
    const totalCharges = pickupRate + this.processingFees + this.customFees;
    return totalCharges;
  }
}
