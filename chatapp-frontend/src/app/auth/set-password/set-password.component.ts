import { Component, OnInit } from '@angular/core';
import { AuthModel } from 'src/app/shared/model/auth.model';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
  userCred = new AuthModel('','','','')

  constructor() { }

  ngOnInit(): void {
  }
  submit(){

  }

}
