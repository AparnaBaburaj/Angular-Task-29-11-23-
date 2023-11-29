import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task';

  myForm!: FormGroup;

  constructor(public formBuilder:FormBuilder){
    this.myForm=this.formBuilder.group({

      name: ['',[Validators.required]],
      email:['']
    })
  }

  submit(){
    console.log(this.myForm);
  }
}
