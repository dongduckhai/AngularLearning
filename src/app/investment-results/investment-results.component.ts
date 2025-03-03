import { Component, Input } from '@angular/core';
import { InvestmentOutput } from '../type/investment.type';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input() dataTable?: InvestmentOutput[];
}
