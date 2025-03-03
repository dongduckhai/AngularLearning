import { Component } from '@angular/core';
import { NameComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentService } from './services/investment.service';
import { InvestmentInput } from './type/investment.type';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NameComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  constructor(private investmentService: InvestmentService) {}
  result = this.investmentService.resultData;

  onSubmit(data: InvestmentInput) {
    this.investmentService.calculateInvestmentResults(data);
  }
}
