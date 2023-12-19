import { Component } from '@angular/core';
import { Book } from "../models/book.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  newBookTitle: string = "";
  newBookAuthor: string = "";
  books: Book[] = []

  addBook(){
    alert(this.newBookAuthor + " " + this.newBookTitle);

    // if(this.newBookTitle.trim().length && this.newBookAuthor.trim().length){
    //   let newBook: Book = {
    //     id: Date.now(),
    //     title: this.newBookAuthor,
    //     author: this.newBookTitle
    //   }
    //   this.books.push(newBook);
    //   this.newBookAuthor = "";
    //   this.newBookTitle = "";

    // }
  }
}
