import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // You can set path variables:
  {path: 'about', component: AboutComponent},
  {path: 'about/:staffId', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  // ** is a wildcard that works at the moment - it may change in a future version...
  {path: '**', redirectTo: ''}
];

// We basically import the RouterModule, configure it with the routes above,
// and then export it.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
