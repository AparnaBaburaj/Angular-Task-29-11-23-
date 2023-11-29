import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';

export const routes: Routes = [
    {
        component:HomeComponent,
        path:''
    },
    
    {
        component:BooksComponent,
        path:'books'
    },
];
