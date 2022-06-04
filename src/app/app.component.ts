import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public title = 'Central DOA+';
  public isAuthenticated = false;

  public logout(): void {
    // todo
  }
}
