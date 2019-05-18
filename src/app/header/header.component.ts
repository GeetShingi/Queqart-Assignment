import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { User } from '../shared/user';
import { from } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = {username: '', password: '', remember: false};
  user1 = {username: '', password: '', remember: false};
  users : User;
  user_category: string;
  username : string;
  userna : string;
  usern : boolean = false;
  userid: string;
  errMess: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuthState()
        .subscribe((user) => {
        if (user) {
          // User is signed in.
          this.username = user.displayName ? user.displayName : user.email;
          this.userna = this.username;
          this.usern = true;
          console.log('Welcome ' + this.username);
        } else {
          console.log('Wrong Password or Username');
          this.usern = false;
          this.username = undefined;
        }
      });
  }
  onSubmitlogin() {
    console.log('User: ', this.user);
    this.authService.logIn(this.user)
  }
  onSubmitsign() {
    console.log('User: ', this.user1);
    this.authService.signUp(this.user1);
  }
  googleLogin() {
    this.authService.googleLogin();
  }

  logOut() {
    this.username = undefined;
    this.authService.logOut();
  }

}
