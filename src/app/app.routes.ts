import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Gallery } from './pages/gallery/gallery';
import { Biography } from './pages/biography/biography';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'gallery', redirectTo: 'gallery/1', pathMatch: 'full' },
  { path: 'gallery/:id', component: Gallery },
  { path: 'biography', component: Biography },
  { path: '**', redirectTo: '' },
];