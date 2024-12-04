import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, CommonModule, RouterModule],  
})
export class RegisterComponent {

  // Initialisation des données du formulaire
  formData: any = {
    nom: '',
    email: '',
    telephone: '',
    message: '',
    image: null,
  };

  // Liste des contacts récupérés
  contacts: any[] = [];
  // Indicateur pour savoir si l'on est en mode édition
  isEditing: boolean = false;
  // Index du contact actuellement modifié
  editingIndex: number = -1;

  constructor(private contactService: ContactService) {}

  // Charger les contacts au démarrage
  ngOnInit(): void {
    this.contactService.getContacts().subscribe({
      next: (data) => (this.contacts = data),  // Stocke les contacts récupérés
      error: () => alert('Erreur lors du chargement des contacts.'),  // Affiche un message d'erreur en cas de problème
    });
  }

  // Ajouter un contact
  addContact(): void {
    // Vérifie si tous les champs sont remplis
    if (this.formData.nom && this.formData.email && this.formData.telephone && this.formData.message) {
      // Appel du service pour ajouter un contact
      this.contactService.addContact(this.formData).subscribe({
        next: (response) => {
          // Ajoute le contact à la liste des contacts
          this.contacts.push(response);
          // Réinitialise le formulaire
          this.resetForm();
          alert('Contact ajouté avec succès.');
        },
        error: () => alert('Erreur lors de l\'ajout du contact.'),  // Affiche un message d'erreur si l'ajout échoue
      });
    } else {
      alert('Veuillez remplir tous les champs.');  // Affiche un message d'alerte si les champs sont vides
    }
  }

  // Modifier un contact
  editContact(index: number): void {
    this.isEditing = true;  // Active le mode édition
    this.editingIndex = index;  // Sauvegarde l'index du contact à modifier
    this.formData = { ...this.contacts[index] };  // Remplir le formulaire avec les données existantes du contact
  }

  // Mettre à jour un contact
  updateContact(): void {
    if (!this.formData.id) {  // Vérifie si l'ID du contact est disponible
      alert("L'ID du contact est manquant.");
      return;
    }
  
    // Appel du service pour mettre à jour le contact
    this.contactService.updateContact(this.formData).subscribe({
      next: () => {
        // Remplace l'élément dans la liste des contacts par les nouvelles données
        this.contacts[this.editingIndex] = { ...this.formData };
        // Réinitialise le formulaire et met fin au mode édition
        this.resetForm();
        this.isEditing = false;
        this.editingIndex = -1;
        alert('Contact mis à jour avec succès.');
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour du contact:', err);  // Affiche l'erreur dans la console pour le débogage
        alert('Erreur lors de la mise à jour du contact. Veuillez vérifier la console pour plus de détails.');  // Affiche un message d'erreur
      }
    });
  }

  // Soumettre le formulaire (ajout ou mise à jour)
  onSubmit(): void {
    // Si on est en mode édition, on met à jour le contact, sinon on ajoute un nouveau contact
    if (this.isEditing) {
      this.updateContact();  // Appelle la méthode de mise à jour
    } else {
      this.addContact();  // Appelle la méthode d'ajout
    }
  }

  // Supprimer un contact
  deleteContact(index: number): void {
    const contactId = this.contacts[index].id;  // Récupère l'ID du contact à supprimer
    // Confirme si l'utilisateur veut vraiment supprimer le contact
    if (confirm('Êtes-vous sûr de vouloir supprimer ce contact ?')) {
      // Appel du service pour supprimer le contact
      this.contactService.deleteContact(contactId).subscribe({
        next: () => {
          // Retire le contact de la liste après suppression
          this.contacts.splice(index, 1);
          alert('Contact supprimé avec succès.');
        },
        error: () => alert('Erreur lors de la suppression du contact.'),  // Affiche un message d'erreur si la suppression échoue
      });
    }
  }

  // Gérer la sélection de l'image par l'utilisateur
  onImageSelected(event: any): void {
    const file = event.target.files[0];  // Récupère le fichier sélectionné
    if (file) {
      const reader = new FileReader();  // Crée un objet FileReader pour lire le fichier
      reader.onload = () => {
        this.formData.image = reader.result;  // Stocke l'image encodée en base64 dans formData
      };
      reader.readAsDataURL(file);  // Lit le fichier en tant qu'URL de données
    }
  }

  // Réinitialiser le formulaire
  resetForm(): void {
    this.formData = {
      nom: '',
      email: '',
      telephone: '',
      message: '',
      image: null,
    };  // Réinitialise les champs du formulaire
    this.isEditing = false;  // Désactive le mode édition
    this.editingIndex = -1;  // Réinitialise l'index du contact modifié
  }
}
