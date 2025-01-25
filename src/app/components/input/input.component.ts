import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-input',
  imports: [CommonModule, NgIcon],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() title: string = ""
  @Input() name: string = ""
  @Input() type: string = ""
  @Input() placeholder: string = ""
  @Input() icon: string = ""
}
