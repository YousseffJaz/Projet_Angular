import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { RegisterComponent } from './app/register/register.component';
import { AppComponent } from './app/app.component';

// Définir les routes directement ici
const routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Fournir HttpClient pour les appels API
    provideRouter(routes) // Fournir le routage avec la configuration définie
  ]
});
