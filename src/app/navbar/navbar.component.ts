import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    if (this.auth.user) {
      this.auth.logout()
      this.router.navigate(['/home'])
    }
    //do nothing
  }

}
