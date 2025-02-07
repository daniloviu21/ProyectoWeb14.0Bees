import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  // Credenciales estáticas
  private validCredentials = {
    email: 'admin@example.com',
    password: '12345678'
  };
  router: any;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    if (email === this.validCredentials.email && password === this.validCredentials.password) {
      alert('Inicio de sesión exitoso 🎉');
      this.router.navigate(['/home']);

    } else {
      this.errorMessage = 'Correo o contraseña incorrectos';
    }
  }
}
