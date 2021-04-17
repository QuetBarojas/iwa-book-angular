import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { CategoryComponent } from './category/category.component';
import { EditorComponent } from './editor/editor.component';
import { BookAuthorComponent } from './book-author/book-author.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    BookComponent,
    AuthorComponent,
    CategoryComponent,
    EditorComponent,
    BookAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
