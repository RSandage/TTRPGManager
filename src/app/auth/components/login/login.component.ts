import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: String = '';

  constructor(private auth: AuthService,
              private fb: FormBuilder,
              private router: Router) {
                this.loginForm = this.fb.group({
                  email: ['', [Validators.required, Validators.email]],
                  password: ['', Validators.required]
                })
              }

  ngOnInit(): void {
  }

  login(form: FormGroup) {
    const authObs = {
      next: (user: any) => console.log(user),
      error: (err: any) => console.log(err),
      complete: () => this.router.navigate(['/profile'])
    };
    this.auth.login(form.value).subscribe(authObs);
    this.router.navigate(['/profile']);
  }
}
