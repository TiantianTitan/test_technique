Test Technique Avancé - Développement, Déploiement d’une API REST et Intégration Frontend

Durée estimée : 1h30

Objectif

Évaluer vos compétences en développement d’API RESTful, manipulation de données, déploiement sur AWS via Serverless, ainsi que votre capacité à mettre en place rapidement un frontend minimaliste pour tester votre API.

Instructions

1. Développement de l’API
   • Technologie : Utilisez le langage de programmation et le framework web de votre choix (ex. Node.js avec Express, Python avec Flask ou Django, etc.).
   • Données :
   Vous devez gérer une liste de contacts disposant des champs suivants :

{
"id": "identifiant unique",
"name": "Nom du contact",
"email": "Adresse email",
"phone": "Numéro de téléphone"
}

Une simple structure de données en mémoire (tableau, dictionnaire) suffira.
Optionnel (avancé) : Intégration d’une base de données persistante (ex: SQLite, MongoDB, ou DynamoDB sur AWS).

    •	Routes REST à implémenter :
    •	GET /contacts : Récupérer la liste de tous les contacts.
    •	GET /contacts/{id} : Récupérer un contact par ID.
    •	POST /contacts : Créer un nouveau contact.
    •	PUT /contacts/{id} : Mettre à jour un contact existant.
    •	DELETE /contacts/{id} : Supprimer un contact.
    •	Validation des données :
    •	Les champs name et email sont obligatoires lors de la création/mise à jour.
    •	Vérification du format de l’email.
    •	Gestion des erreurs :
    •	Utilisation de codes d’état HTTP appropriés (404, 400, etc.).
    •	Messages d’erreurs clairs.

2. Tests Locaux
   • Validation locale : Testez votre API localement (via cURL, Postman, ou autre).
   • Documentation : Fournissez un README.md détaillant comment installer et lancer le projet localement, ainsi que comment tester l’API.

3. Déploiement sur AWS avec le Framework Serverless
   • Objectif : Déployez votre API sur AWS Lambda & API Gateway à l’aide du framework Serverless.
   • Configuration :
   • Créez un fichier serverless.yml pour définir vos fonctions, routes et ressources.
   • Assurez-vous que votre API est accessible publiquement après le déploiement.
   • Optionnel (avancé) : Intégration avec une base de données AWS (DynamoDB) pour persister les données.
   • Documentation : Mettez à jour le README.md avec les instructions de déploiement sur AWS.

4. Bonus (Frontend)

Pour les candidats souhaitant démontrer davantage de compétences, ajoutez un petit frontend pour tester votre API :
• Technologie : Par exemple, React
• Fonctionnalités minimales :
• Un écran pour lister tous les contacts (lecture de /contacts).
• Un formulaire permettant d’ajouter un nouveau contact (requête sur /contacts en POST).
Optionnel (avancé) :
• Mise à jour et suppression des contacts via le frontend.
• Gestion des erreurs (afficher un message d’erreur si une action échoue).
• Exécution locale du frontend :
Le frontend doit pouvoir être lancé en local, appeler l’API déployée sur AWS, et permettre de créer et lister les contacts.

5. Code
   • Qualité du Code :
   Code propre, lisible, correctement structuré.
   • Gestion des Erreurs :
   Gérer les erreurs serveur et afficher des messages d’erreurs clairs dans l’API (et côté frontend si implémenté).
   • Dépôt Git :
   Hébergez votre code dans un dépôt Git (GitHub, GitLab, Bitbucket, etc.) et fournissez le lien.
   • Livraison :
   Assurez-vous que tout le code nécessaire est inclus et que les instructions d’exécution, de test et de déploiement sont complètes.

Notes Additionnelles
• Gestion du Temps : Le test est prévu pour durer environ 1h30. Planifiez judicieusement votre temps.
• Simplicité vs. Complexité : Mieux vaut une solution partielle et propre qu’une solution complète mais confuse.
• Dépendances : Mentionnez et justifiez l’usage de toutes vos dépendances.

Bonne chance et au plaisir de découvrir votre solution !
