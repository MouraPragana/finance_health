import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = "";
  @Input() type: string = "";
  @Input() disabled: boolean = false;
  @Input() class: string = "";
}
