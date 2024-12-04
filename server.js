// Importation des dépendances
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Création de l'application Express
const app = express();
const PORT = 3000; // Le port sur lequel le serveur écoute
app.use(cors({
    origin: 'http://localhost:4200', // Allow only Angular app on this port
  }));
  

// Middleware pour parser les données JSON dans le corps de la requête
app.use(bodyParser.json());

// Chemin vers le fichier db.json
const dbPath = path.join(__dirname, 'db.json');

// Route pour récupérer les contacts (lire le fichier db.json)
app.get('/api/contacts', (req, res) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erreur lors de la lecture du fichier');
    }
    res.json(JSON.parse(data));
  });
});

// Route pour ajouter un contact (ajouter des données au fichier db.json)
app.post('/api/contacts', (req, res) => {
  const newContact = req.body;

  // Lire les données existantes dans db.json
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Erreur lors de la lecture du fichier');
    }

    // Convertir les données en objet JavaScript
    const contacts = JSON.parse(data);

    // Ajouter le nouveau contact
    contacts.push(newContact);

    // Sauvegarder les données mises à jour dans le fichier db.json
    fs.writeFile(dbPath, JSON.stringify(contacts, null, 2), 'utf8', (err) => {
      if (err) {
        return res.status(500).send('Erreur lors de l\'écriture dans le fichier');
      }
      res.status(200).send('Contact ajouté avec succès');
    });
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
