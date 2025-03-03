import { Component } from '@angular/core';
import { NameComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [NameComponent, UserInputComponent],
})
export class AppComponent {}
