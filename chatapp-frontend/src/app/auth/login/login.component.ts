import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModel } from 'src/app/shared/model/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  User = new AuthModel('', '', '');

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  Verify() {
    this._auth.Verify(this.User).subscribe((res) => {
      console.log('credentials', this.User);
      this._router.navigate(['/chat']);
      console.log(res);
    });
  }
}
