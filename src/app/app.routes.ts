import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Gallery } from './pages/gallery/gallery';
import { Biography } from './pages/biography/biography';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'gallery', component: Gallery, title: 'Galleria' },
  { path: 'biography', component: Biography, title: 'Biografia' },
  { path: '**', redirectTo: '' },
];