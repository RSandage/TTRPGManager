import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User = new User(
    '',
    '',
    '',
    new Date()
  )

  constructor(private auth: AuthService,
              private router: Router) {
                this.auth.user.subscribe((user: User | null) => {
                  this.user = user
                })
               }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  debug() {
    console.log(this.user)
  }
}
