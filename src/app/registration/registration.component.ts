import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public loginValid = true;

  Roles: any = ['Admin', 'Author', 'Reader'];
  constructor() { }
  ngOnInit() {
  }

  public onSubmit(): void {
    this.loginValid = true;
  }
}
