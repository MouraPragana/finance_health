import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-default-layout-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonComponent],
  templateUrl: './default-layout-home.component.html',
  styleUrl: './default-layout-home.component.css'
})
export class DefaultLayoutHomeComponent {
  // dentro do output "redirect" é a propriedade que será chamado no pai.
  @Output("redirect") onRedirect = new EventEmitter();
  @Output("submit") onSubmit = new EventEmitter();
  @Input() primary: string = '';
  @Input() form!: FormGroup

  isLoaded:boolean;

  constructor(){
    this.isLoaded = false;
  }

  isButtonDisabled(buttonName: string, primary: string): boolean{
    if (primary == buttonName){
      if (!this.form.valid){
        return true;
      }

      return false;
    }

    return false;
  }

  setLoadedImage(){
    this.isLoaded = true;
  }

  getButtonType(buttonName: string, primary: string){
    return primary == buttonName ? 'primary': 'secondary'
  }

  getButtonFunction(buttonName: string, primary: string){
    return primary != buttonName ? this.redirect() : this.submit()
  }

  submit(){
    this.onSubmit.emit();
  }

  redirect(){
    this.onRedirect.emit();
  }
}
