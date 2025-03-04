import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../type/investment.type';
import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {}

  form = signal<InvestmentInput>({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  handleSubmit() {
    this.investmentService.calculateInvestmentResults(this.form());
    this.form.set({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0,
    });
  }
}
