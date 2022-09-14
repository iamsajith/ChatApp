import { Component, OnInit } from '@angular/core';
import { AuthModel } from 'src/app/shared/model/auth.model';

@Component({
  selector: 'app-check-username',
  templateUrl: './check-username.component.html',
  styleUrls: ['./check-username.component.css']
})
export class CheckUsernameComponent implements OnInit {
  userCred = new AuthModel('','','','')

  constructor() { }

  ngOnInit(): void {
  }
  submit(){}

}
