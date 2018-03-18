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
  genreList = [ 'Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'History', 'Horror', 'Music', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Short','Sport', 'Superhero', 'Thriller', 'War', 'Western'];

  actressList: FormControl = new FormControl();
  actressoptions = [
    'Priyanka Chopra',
    'Deepika Padukone',
    'Aishwarya Rai',
    'Katrina Kaif',
    'Anushka Sharma',
    'Kareena Kapoor',
    'Vidya Balan',
    'Asin',
    'Sonakshi Sinha',
    'Sridevi',
    'Kajol',
    'Sonam Kapoor'
  ];

  actorsList: FormControl = new FormControl();
  actorsoptions = [
    'Amitabh Bachchan',
    'Shah Rukh Khan',
    'Aamir Khan',
    'Akshay Kumar',
    'Salman Khan',
    'Kamal Haasan',
    'Hrithik Roshan',
    'Ajay Devgan',
    'Rajinikanth',
    'Naseeruddin Shah',
    'Irrfan Khan',
    'Anupam Kher'
  ];


  constructor() { }

  ngOnInit() {
  }

}
