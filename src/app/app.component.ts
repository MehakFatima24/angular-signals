import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextDisplayComponent } from './text-display/text-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-signals';
}
