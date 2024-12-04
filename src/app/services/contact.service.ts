import { Injectable } from '@angular/core';  // Importation de la fonctionnalité Injectable pour déclarer ce service
import { HttpClient } from '@angular/common/http';  // Importation du client HTTP pour effectuer des requêtes
import { Observable } from 'rxjs';  // Importation de l'Observable pour gérer les réponses asynchrones

@Injectable({
  providedIn: 'root',  // Déclare le service comme injectable dans toute l'application
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/contacts'; // URL du serveur json-server où les contacts sont stockés

  constructor(private http: HttpClient) {}  // Injection du HttpClient dans le service pour effectuer des requêtes HTTP

  // Méthode pour obtenir les détails d'un contact (non implémentée ici)
  getContactDetails() {
    throw new Error('Method not implemented.');  // Lance une erreur si cette méthode est appelée sans implémentation
  }

  // Méthode pour obtenir tous les contacts
  getContacts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // Effectue une requête GET pour récupérer tous les contacts
  }

  // Méthode pour ajouter un nouveau contact
  addContact(contact: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contact);  // Effectue une requête POST pour ajouter un contact à l'API
  }

  // Méthode pour mettre à jour un contact existant
  updateContact(contact: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/contacts/${contact.id}`, contact);  // Effectue une requête PUT pour mettre à jour un contact spécifique
  }

  // Méthode pour supprimer un contact
  deleteContact(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;  // Construit l'URL pour supprimer un contact spécifique en utilisant son ID
    return this.http.delete<any>(url);  // Effectue une requête DELETE pour supprimer le contact
  }
}
