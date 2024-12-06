import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [[FormsModule, ReactiveFormsModule, RouterLink]],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      mensagem: ['', Validators.required],
    });
  }

  form: FormGroup;
  onSubmit() {
    console.log(this.form.value);
  }
}
