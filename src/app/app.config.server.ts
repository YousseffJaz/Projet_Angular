import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';  // Importation des fonctions et types nécessaires pour configurer l'application Angular, en particulier pour la gestion des configurations et l'application de la configuration côté serveur.
import { provideServerRendering } from '@angular/platform-server';  // Importation de la fonction qui permet d'activer le rendu côté serveur pour une application Angular (Server-Side Rendering ou SSR).
import { appConfig } from './app.config';  // Importation de la configuration de l'application définie dans un fichier séparé (app.config.ts).

const serverConfig: ApplicationConfig = {  // Définition de la configuration spécifique au serveur pour cette application Angular.
  providers: [
    provideServerRendering()  // Ajout du provider qui permet d'activer le rendu côté serveur, afin de servir l'application Angular sur le serveur.
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);  // Fusionne la configuration de l'application (appConfig) avec la configuration côté serveur (serverConfig) et exporte cette configuration combinée.
