import { Component, OnInit } from '@angular/core';
import { AuthModel } from 'src/app/shared/model/auth.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userCred = new AuthModel('','','','')

  constructor() { }

  ngOnInit(): void {
  }

  submit(){

  }

}
