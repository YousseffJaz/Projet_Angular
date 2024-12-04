import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';  
// Importation de `ApplicationConfig` pour définir la configuration de l'application Angular.
// Importation de `provideZoneChangeDetection` pour configurer la détection des changements dans l'application Angular.

import { provideRouter } from '@angular/router';  
// Importation de `provideRouter` pour définir les routes de l'application Angular.

import { routes } from './app.routes';  
// Importation des routes de l'application depuis le fichier `app.routes.ts`.

import { provideClientHydration } from '@angular/platform-browser';  
// Importation de `provideClientHydration`, utilisée pour hydrater l'application Angular côté client après le rendu côté serveur.

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';  
// Importation de `provideAnimationsAsync`, permettant d'ajouter un support asynchrone pour les animations dans Angular.

export const appConfig: ApplicationConfig = {  
  // Définition de la configuration de l'application Angular en exportant un objet de type `ApplicationConfig`.
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),  
    // Ajoute la configuration pour la détection des zones (Zone.js). L'option `eventCoalescing: true` combine plusieurs événements proches dans le temps en un seul cycle de détection des changements, améliorant les performances.

    provideRouter(routes),  
    // Configure le système de routage en passant les routes définies dans le fichier `app.routes.ts`.

    provideClientHydration(),  
    // Active l'hydratation côté client pour compléter les informations nécessaires après le rendu côté serveur (utile dans les applications utilisant SSR).

    provideAnimationsAsync()  
    // Configure les animations Angular pour qu'elles soient chargées de manière asynchrone, améliorant ainsi les performances et réduisant le temps de chargement initial.
  ]
};
