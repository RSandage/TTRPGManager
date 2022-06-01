import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: String = '';

  constructor(private auth: AuthService,
              private fb: FormBuilder,
              private router: Router) {
                this.registerForm = this.fb.group({
                  email: ['', [Validators.required, Validators.email]],
                  password: ['', Validators.required]
                })
              }

  ngOnInit(): void {
  }

  sendRegister(form: FormGroup) {
    const authObs = {
      next: (user: any) => console.log(user),
      error: (err: any) => console.log(err),
      complete: () => this.router.navigate(['/login']),
    };
    this.auth.register(form.value).subscribe(authObs)
  }

}
