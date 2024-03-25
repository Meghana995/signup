import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './user';
import { NgFor } from '@angular/common';
import { url } from 'inspector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  countryCodes = [
    { code: '+1', name: 'USA' },
    { code: '+44', name: 'UK' },
    // Add more country codes as needed
  ];
  
  userModel = new User(null,'', '','', this.countryCodes[0]?.code, null,null,null, false);
  topicHaserror = true;
  submitted: boolean = false;
  resumeForm!: FormGroup;
  uploadedResume: File | null = null;
  onUpload:boolean=true;
  uploading = false; 
  passwordMatchError: boolean = false;
  isInputFocused = false;
  signUp: boolean=true;
  title: any;
  showPassword: boolean=false;
  hideProgressbar:boolean=false;
  uploadedFileName: string | undefined;
 verifyCode: boolean=false;
 
 countries=[
  {name: "Afghanistan",src:'assets/flag--ae-4x3.svg'},
  {name: "India",src:'assets/flag--ae-4x3.svg'}

]
  showPopup: boolean=false;
  emailentered:string='';
  showPasswordConfirm: boolean=false;
  formSubmitted: boolean=false;
  afterRegister: boolean=false;
  sideNav: boolean=false;
  sideNavWidth: string='0px';
 
  constructor( private fb: FormBuilder,private el: ElementRef) {
    // const nums = [2, 7, 11, 15];
    // const target = 9;
    // const result = this.twoSum(nums, target);
    // console.log(result); // Output: [0, 1]
    this.uploading = true;
   
        
          setTimeout(() => {
           
            this.uploading = false;
           
            
          }, 2000); 
  }

  ngOnInit() {
    this.resumeForm = this.fb.group({
      resumeFile: ['']
    });
  }
  // registerSignup(){
  //   this.showPopup=true;
  // }
  handleClick() {
    // Add a CSS class to the phone-number-field element when clicked
    this.el.nativeElement.querySelector('.phone-number-field').classList.add('focused');
  }
  popUpClose(){
    this.showPopup=false;
    // this.afterRegister=true;
  }
 
  deleteResume(){
    this.uploadedResume = null;
    this.resumeForm.patchValue({ resumeFile: null });
    this.onUpload=true;
  }
  applyReferral() {
    const referralCode = this.userModel.referral;
    if (referralCode === "Megha") {
      this.verifyCode = false;
    } else {
      this.verifyCode = true;
    }
  }
  validateTopic(value: any) {
    if (value === 'default') {
      this.topicHaserror = false;
    } else {
      this.topicHaserror = true
    }

  }

  checkPasswordMatch() {
    const password = this.userModel.password;
    const confirmPassword = this.userModel.confirmPassword;
  
    // Check if passwords match
    this.passwordMatchError = password !== confirmPassword;
  }
  showSignUp(){
    this.signUp=true;
  }
  closeSignUp(){
    this.signUp=false;
  }
  roundClose(){
    this.submitted=false;
    this.signUp=false;
  }


 

//  twoSum(nums: number[], target: number): number[] {
//     // Create an empty object to store the indices of the numbers.
//     const numIndexMap: { [key: number]: number } = {};

//     // Iterate through the array 'nums'.
//     for (let i = 0; i < nums.length; i++) {
//         // Calculate the complement (the number needed to reach the target).
//         const complement = target - nums[i];

//         // Check if the complement is already in the 'numIndexMap'.
//         if (complement in numIndexMap) {
//             // If found, return the indices of the two numbers.
//             return [numIndexMap[complement], i];
//         }

//         // If the complement is not in the map, store the current number and its index.
//         numIndexMap[nums[i]] = i;
//     }

//     // If no solution is found, return an empty array.
//     return [];
// }

// Example usage:
 // Output: [0, 1]


  onSubmit() {
    this.uploading = true;
   
        
          setTimeout(() => {
           
            this.uploading = false;
            this.formSubmitted=true;
            
          }, 2000); 
    
    this.emailentered=this.userModel.email;
   
   
    if( this.emailentered && this.userModel.firstName && this.userModel.lastName && this.userModel.phone && this.userModel.password && this.userModel.confirmPassword && this.userModel.subscribe){
      
      this.uploading = true;
      setTimeout(() => {
       
        this.uploading = false;
       
        this.showPopup=true;
       
      }, 2000);
    }else{
      this.showPopup=false;
    }
   
  //  this.signUp=false;
  //  this.afterRegister=true
   
    console.log(this.userModel);
    // this._enrollmentservice.enroll(this.userModel)
    //   .subscribe({
    //     next: (data) => console.log('success', data),
    //     error: (error) => console.log('error', error)
    //   });
  }
  togglePasswordVisibility(){
    this.showPassword = !this.showPassword;
  }
  togglePasswordVisibilityConfirm(){
    this.showPasswordConfirm = !this.showPasswordConfirm;
  }
  // handleFileInput(event: any) {
  //   const file = (event.target as HTMLInputElement).files?.[0];
  //   this.resumeForm.patchValue({ resumeFile: file });
  //   this.resumeForm.get('resumeFile')?.updateValueAndValidity();
  //   const resumeFile = this.resumeForm.get('resumeFile')?.value;
    
  //   if (resumeFile) {
  //     this.uploading = true;
      
  //     this.onUpload=false;
  //     setTimeout(() => {
  //       // Reset loader and handle the upload logic
  //       this.uploading = false;
  //       this.uploadedResume = resumeFile;
  //       // ...
  //     }, 2000); 
  //   }
  // }
  uploadResume() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf, .doc, .docx';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', (event: any) => {
      const file = event.target.files[0];
      this.handleFileUpload(file);
      // this.extractResumeData(file);
    });

    document.body.appendChild(fileInput);
    fileInput.click();

    // Cleanup: remove the input element from the DOM after use
    fileInput.remove();
    

    // Assuming you have a function to extract data from the resume
    
  }
  countrydropdownClick(){

  }
  openMenu(){
    
    this.sideNavWidth = '100%';
    

  }
  closesidenav(){
    this.sideNavWidth = '0';
  }
  handleFileUpload(file: File) {
    // Implement your file upload logic here
    console.log('Uploaded file:', file);
    
    // Set the uploaded file name for display
    this.uploadedFileName = file.name;
    if(file){
      this.uploading = true;
          
        
          setTimeout(() => {
            // Reset loader and handle the upload logic
            this.uploading = false;
           
            // ...
          }, 2000); 
    }
    // You can now handle the file as needed (e.g., send it to a server)
  }
 

}
