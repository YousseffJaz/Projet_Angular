import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importation des modules nécessaires pour les tests Angular
import { HomeComponent } from './home.component'; // Importation du composant à tester

describe('HomeComponent', () => { // Définition d'un groupe de tests pour le HomeComponent
  let component: HomeComponent; // Déclaration de la variable pour le composant
  let fixture: ComponentFixture<HomeComponent>; // Déclaration de la variable pour la fixture (instance du composant et de son template)

  beforeEach(async () => { // Configuration de chaque test avant son exécution
    await TestBed.configureTestingModule({
      imports: [HomeComponent] // Déclaration du composant à tester dans le module de test
    })
    .compileComponents(); // Compilation des composants pour les tests

    fixture = TestBed.createComponent(HomeComponent); // Création de la fixture du composant (instanciation du composant)
    component = fixture.componentInstance; // Récupération de l'instance du composant
    fixture.detectChanges(); // Détection des changements dans la fixture (mise à jour de l'interface)
  });

  it('should create', () => { // Définition d'un test pour vérifier la création du composant
    expect(component).toBeTruthy(); // Vérification que l'instance du composant existe bien (elle n'est pas nulle ou indéfinie)
  });
});
