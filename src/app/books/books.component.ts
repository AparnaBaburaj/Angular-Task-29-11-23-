import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';
import { Book } from './books.model';



@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})

export class BooksComponent {
  myForm!: FormGroup;

  countries: string[] = ['India','USA', 'Canada', 'UK', 'Australia', 'Other'];

  constructor(public formBuilder:FormBuilder){
    this.myForm=this.formBuilder.group({
        bookName: ['', Validators.required],
        author: ['', Validators.required],
        publication: ['', Validators.required],
        price: ['', [Validators.required, Validators.min(0)]],
        genre: ['', Validators.required],
        publishedDate: ['', Validators.required],
        country: ['', Validators.required],
        description: [''],
      });
  }
  onSubmit() {
    if (this.myForm.valid) {
      const newBook: Book = this.myForm.value;
      // TODO: Add logic to store the book details (e.g., send to a service)
      console.log("Book Details",newBook);
      alert("Successfully Added")
      this.myForm.reset();
    }
  }

}
