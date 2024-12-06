import { Usuario } from './../../../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AcountService } from '../../../services/acount.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Cliente } from '../../../model/Cliente';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-login-cliente',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss'],
})
export class LoginClienteComponent implements OnInit {
  formulario: FormGroup;
  cliente!: Cliente[];

  constructor(
    private authServive: AuthService,
    private acountService: AcountService,
    private formBuilde: FormBuilder,
    private router: Router
  ) {
    this.formulario = this.formBuilde.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.formulario.valid) {
      const email: string = this.formulario.get('email')!.value;
      this.acountService
        .login(email)
        .pipe(take(1))
        .subscribe({
          next: (data) => {
            if (data.length > 0) {
              this.cliente = data;
              this.validaUser(this.cliente[0]);
            } else {
              alert('Email não cadastrado');
            }
          },
          error: (err) => {
            alert('Erro ao fazer login' + err.message);
          },
        });
    }
  }

  validaUser(usuario: Cliente) {
    const password: string = this.formulario.get('password')!.value;
    if (usuario.senha == password) {
      let user: Usuario = {
        id: this.cliente[0].id,
        name: this.cliente[0].nome,
        email: this.cliente[0].email,
        token: '1234567',
      };
      this.authServive.login(user);
      this.router.navigate(['/home']);
    } else {
      alert('Senha incorreta');
    }
  }
}
