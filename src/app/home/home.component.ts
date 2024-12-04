import { Component } from '@angular/core'; // Importation de la classe Component pour définir un composant Angular
import { RouterModule } from '@angular/router'; // Importation du module RouterModule pour utiliser le routage dans ce composant

@Component({
  selector: 'app-home', // Définition du sélecteur du composant, utilisé pour insérer ce composant dans le HTML
  standalone: true, // Le composant est autonome, il n'a pas besoin d'un module Angular pour fonctionner
  templateUrl: './home.component.html', // Définition du fichier de template HTML du composant
  styleUrls: ['./home.component.css'], // Définition des fichiers de style CSS du composant
  imports: [RouterModule], // Importation du module RouterModule pour utiliser les fonctionnalités de routage dans ce composant
  providers: [] // Liste des services fournis par ce composant (ici vide car aucun service n'est fourni)
})
export class HomeComponent {
  // Définition d'un tableau d'objets représentant les services proposés par le gymnase
  services = [
    { 
      title: 'Musculation', // Titre du service
      description: 'Des équipements de pointe pour votre entraînement.', // Description du service
      image: 'assets/images/musculation.jpg' // Chemin de l'image associée au service
    },
    { 
      title: 'Yoga', // Titre du service
      description: 'Des cours de yoga pour apaiser votre esprit.', // Description du service
      image: 'assets/images/yoga.jpg' // Chemin de l'image associée au service
    },
    { 
      title: 'Coaching', // Titre du service
      description: 'Coaching personnalisé pour atteindre vos objectifs.', // Description du service
      image: 'assets/images/coaching.jpg' // Chemin de l'image associée au service
    }
  ];
}
