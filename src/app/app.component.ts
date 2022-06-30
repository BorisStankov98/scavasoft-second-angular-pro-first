import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rememberMe:boolean = false;

  handleChecked(event:boolean){
    this.rememberMe = event
    console.log(this.rememberMe)
  }
}
