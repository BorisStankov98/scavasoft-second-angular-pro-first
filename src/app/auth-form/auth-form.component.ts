import { Component, ContentChild,ViewChild, AfterViewInit, AfterContentInit} from '@angular/core';
import { RememberMeComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit,AfterViewInit {
  showMessage:boolean|undefined;

  @ViewChild(AuthMessageComponent) message: number | undefined
  @ContentChild( RememberMeComponent ) remember: RememberMeComponent | undefined

  constructor() { }

  ngAfterContentInit(): void {
    if(this.remember){
      this.remember.checked.subscribe((chekced:boolean)=>{
        this.showMessage = chekced;
      })
    }
  }

  ngAfterViewInit(): void {
    if(this.message){
      this.message = 30
    }
  }

  onSubmit(){
    
  }
}
