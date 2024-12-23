import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';
import { CatagoriesComponent } from './app/components/catagories/catagories.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { LoginComponent } from './app/components/login/login.component';
import { AdminComponent } from './app/components/admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'categories', component: CatagoriesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
