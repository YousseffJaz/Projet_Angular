import { NgModule } from '@angular/core';  
// Importation de `NgModule`, une fonction essentielle pour définir des modules Angular.

import { RouterModule, Routes } from '@angular/router';  
// Importation de `RouterModule` pour configurer le système de routage Angular.
// Importation de `Routes`, un type utilisé pour définir les routes de l'application.

import { HomeComponent } from './home/home.component';  
// Importation du composant `HomeComponent`, qui sera associé à une route.

import { RegisterComponent } from './register/register.component';  
// Importation du composant `RegisterComponent`, qui sera également associé à une route.

export const routes: Routes = [  
  // Définition des routes de l'application Angular dans un tableau `Routes`.
  { path: '', component: HomeComponent },  
  // Route par défaut (chemin vide) qui redirige vers `HomeComponent`.

  { path: 'home', component: HomeComponent },  
  // Route spécifique pour le chemin `/home` qui affiche le composant `HomeComponent`.

  { path: 'register', component: RegisterComponent },  
  // Route pour le chemin `/register` qui affiche le composant `RegisterComponent`.
];

@NgModule({  
  // Annotation `@NgModule` utilisée pour définir un module Angular.
  imports: [RouterModule.forRoot(routes)],  
  // Configuration du système de routage Angular en utilisant `RouterModule.forRoot(routes)` avec les routes définies.

  exports: [RouterModule]  
  // Exportation de `RouterModule` pour qu'il puisse être utilisé dans d'autres modules de l'application.
})
export class AppRoutingModule { }  
// Définition et exportation de la classe `AppRoutingModule` qui contient la configuration des routes.
