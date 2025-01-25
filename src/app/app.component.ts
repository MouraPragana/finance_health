import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { ionLockClosed, ionMail } from "@ng-icons/ionicons";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  viewProviders: [provideIcons({ ionLockClosed, ionMail })],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finance_health';
}
