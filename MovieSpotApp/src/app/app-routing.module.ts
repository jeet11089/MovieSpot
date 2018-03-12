import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../app/pages/about/about.component';
import { ContactComponent } from '../app/pages/contact/contact.component';
import { AsideComponent } from './shared/aside/aside.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  { path: '', redirectTo:'/about', pathMatch:'full' },
  // { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'addmovie', component: AddMovieComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
  // declarations: []
})
export class AppRoutingModule { }
