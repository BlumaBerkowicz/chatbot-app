import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: '**', redirectTo: '' }  // Redirect any unknown paths to home
];
