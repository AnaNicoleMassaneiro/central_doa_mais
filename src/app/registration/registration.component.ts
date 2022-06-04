import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

 
  public loginValid = true;
  public username = '';
  public password = '';

  private _destroySub$ = new Subject<void>();

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
  }

  public onSubmit(): void {
    this.loginValid = true;
  }
}
