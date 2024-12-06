import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AcountService } from '../../../services/acount.service';
import { Cliente } from '../../../model/Cliente';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Usuario } from '../../../model/Usuario';
import { take } from 'rxjs';

@Component({
  selector: 'app-create-cliente',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-cliente.component.html',
  styleUrl: './create-cliente.component.scss',
})
export class CreateClienteComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private acountService: AcountService,
    private authServive: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.registerForm.valid) {
      this.acountService
        .createAcount(this.registerForm.value)
        .pipe(take(1))
        .subscribe({
          next: (data) => {
            this.fazerLogin(data);
          },
        });
    }
  }

  fazerLogin(usuario: Cliente) {
    let user: Usuario = {
      id: usuario.id,
      name: usuario.nome,
      email: usuario.email,
      token: '123456',
    };
    this.authServive.login(user);
    this.router.navigate(['/home']);
  }
}
