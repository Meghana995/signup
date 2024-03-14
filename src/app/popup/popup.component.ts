import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  showModal: boolean=true;
  captcha:string;
  timeLeft: number = 10;
  interval:any;
  showTimer: boolean=true;
 @Input() emailEntered:any;
 @Output() ClosePopup: EventEmitter<void> = new EventEmitter<void>();
  showOTP: boolean=true;
  otp: any;
  invalidOTP: boolean=false;
  constructor(){
    this.captcha='';
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.showTimer=true;
      }else{
        this.showTimer=false;
      }
    },1000)
  }

  

 

  
  // clickRegister(){
  //   this.showModal=true;
    
  // }
  clickPopupSubmit() {
    // Check if OTP is exactly 4 digits long
    if (this.otp.length === 4 && this.captcha) {
      this.showOTP = false;
      // You can emit the OTP for further processing if needed
      console.log('OTP entered:', this.otp);
    } else {
      // Display error message or handle invalid OTP
      console.log('Invalid OTP');
      if(this.otp.length !==4){
      this.invalidOTP=true;}
    }
  }
  ClosePopUp(){
    this.ClosePopup.emit();
  }
  ClosePopUpButton(){
    this.ClosePopup.emit();
  }
  startTimer() {
    this.timeLeft=10;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.showTimer=true;
      }else{
        this.showTimer=false;
      }
    },2000)
  }
  resolved(captchaResponse:string | null){
    this.captcha=captchaResponse || '';
    console.log(this.captcha)
  }
}
