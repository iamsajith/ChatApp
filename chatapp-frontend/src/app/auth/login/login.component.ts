import { Component, OnInit } from '@angular/core';
import { AuthModel } from 'src/app/shared/model/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User= new AuthModel('','','','')

  constructor() { }

  ngOnInit(): void {
  }

  Verify(){}

}
