# Application de Liste de Tâches avec SQLite

Ceci est une application web simple de gestion de tâches (to-do list) réalisée avec Node.js, Express, Pug et SQLite (via l’ORM Sequelize).

## Fonctionnalités

- Ajouter de nouvelles tâches
- Afficher toutes les tâches
- Supprimer des tâches
- Les données sont stockées dans une base de données SQLite locale

## Comment exécuter le projet

1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Démarrer le serveur :
   ```bash
   node server.js
   ```
3. Ouvrir votre navigateur à l’adresse [http://localhost:3000](http://localhost:3000)

## Structure du projet

- `server.js` : Fichier principal du serveur (routes Express et logique)
- `models/todo.js` : Modèle Sequelize pour les tâches (SQLite)
- `views/todo.pug` : Template Pug pour l’interface utilisateur

## Fonctionnement

- Le serveur gère les requêtes HTTP et interagit avec la base de données SQLite via Sequelize.
- La vue Pug affiche la liste des tâches et les formulaires pour ajouter/supprimer des tâches.
- Toutes les données sont sauvegardées dans le fichier `todo-app.sqlite`.

## Pour le professeur

- Tout le code source est dans ce dépôt.
- Vous avez été ajouté comme collaborateur et pouvez consulter, cloner ou commenter le code.
- N’hésitez pas à ouvrir une issue ou à me contacter si vous avez des questions.
