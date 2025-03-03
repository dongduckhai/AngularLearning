import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../type/investment.type';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  form = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  };
  @Output() onSubmit = new EventEmitter<InvestmentInput>();

  handleSubmit() {
    this.onSubmit.emit(this.form);
  }
}
