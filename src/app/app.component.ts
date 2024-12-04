import { Component } from '@angular/core';  // Importation du décorateur Component d'Angular pour définir un composant.
import { RouterOutlet } from '@angular/router';  // Importation de RouterOutlet d'Angular pour gérer l'affichage dynamique des composants selon les routes définies.

@Component({
  selector: 'app-root',  // Définition du sélecteur CSS qui identifiera ce composant dans le HTML (balise <app-root></app-root>).
  standalone: true,  // Indique que ce composant est autonome et ne dépend d'aucun module Angular externe.
  imports: [RouterOutlet],  // Importation de RouterOutlet pour activer le routage dans ce composant, permettant l'affichage des composants associés aux routes.
  templateUrl: './app.component.html',  // Spécifie le fichier HTML associé à ce composant.
  styleUrls: ['./app.component.css'],  // Spécifie le fichier CSS associé à ce composant.
})
export class AppComponent {
  title = 'projet_angular';  // Déclaration d'une propriété title qui peut être utilisée dans le template pour afficher le titre du projet.
}
