import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  hide = true;

  toppings = new FormControl();
  toppingList = ['India', 'Afghanistan', 'Bahamas', 'Cambodia', 'Denmark', 'Egypt', 'France', 'Germany', 'Hong Kong', 'Iceland', 'Japan', 'Kuwait'];

  language = new FormControl();
  languageList = ['India', 'Afghanistan', 'Bahamas', 'Cambodia', 'Denmark', 'Egypt', 'France', 'Germany', 'Hong Kong', 'Iceland', 'Japan', 'Kuwait'];

  genre = new FormControl();
  genreList = ['Romantic', 'Sci', 'Action', 'Horon', 'Fic'];

  constructor() { }

  ngOnInit() {
  }

}
