
# 👥 Employee App — Angular CRUD

Application web de gestion des employés développée avec Angular 21.

## ✨ Fonctionnalités

- 📋 Liste des employés avec tableau interactif
- 🔍 Recherche en temps réel par nom
- 📊 Statistiques dynamiques (total employés, salaire moyen, nb de départements)
- 👤 Page de détail par employé
- ➕ Ajout d'un nouvel employé avec validation des champs
- ✏️ Modification des informations d'un employé
- 🗑️ Suppression avec confirmation (SweetAlert2)
- ✅ Notifications de succès après chaque action
- 🚫 Page 404 personnalisée
- 🧭 Navbar et footer responsive

## 🛠️ Technologies utilisées

- Angular 21 (Standalone Components)
- TypeScript
- SCSS
- Angular Router
- Angular Forms
- SweetAlert2

## 📁 Structure du projet
src/app/
├── components/
│   ├── navbar/
│   ├── footer/
│   ├── employee-list/
│   ├── employee-form/
│   ├── employee-detail/
│   └── not-found/
├── models/
│   └── employee.model.ts
├── services/
│   └── employee.service.ts
└── data/
└── employees.json
## 🚀 Lancer le projet

```bash
git clone https://github.com/yasmine-ess/employee_app.git
cd employee_app
npm install
ng serve
```

Ouvre **http://localhost:4200**

## 📌 À venir

- Connexion à un vrai backend ASP.NET Core
- Authentification et gestion des rôles
- Pagination de la liste

#

**Esseghir Yasmine** — Développeuse Full Stack .NET / Angular

