import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'

const routes: Routes = [
 
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule',
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutModule',
  },
  {
    path: 'service',
    loadChildren: './pages/service/service.module#ServiceModule',
  },
  {
    path: 'contact',
    loadChildren: './pages/contact/contact.module#ContactModule',
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
