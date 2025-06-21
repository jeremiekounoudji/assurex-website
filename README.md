# AssureX Insurance Broker - Landing Page

## 🏢 À Propos du Projet

Landing page moderne et responsive pour **AssureX**, courtier en assurances spécialisé dans la protection des particuliers et des entreprises. Le site présente une gamme complète de services d'assurance avec un design professionnel inspiré des meilleures pratiques UX/UI.

## 🎯 Objectifs

- **Génération de leads** : Formulaires de contact optimisés
- **Établissement de confiance** : Design professionnel et contenu de qualité
- **Conversion** : Boutons d'appel à l'action stratégiquement placés
- **Accessibilité** : Navigation intuitive sur tous les appareils

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **Tailwind CSS** - Framework CSS utilitaire
- **JavaScript (Vanilla)** - Interactions et animations
- **Font Awesome** - Icônes professionnelles
- **CSS3** - Animations et styles personnalisés

## 📱 Fonctionnalités

### ✅ Design & UX
- [x] Design responsive (mobile-first)
- [x] Navigation sticky avec effet de scroll
- [x] Animations fluides et transitions
- [x] Palette de couleurs professionnelle (bleu AssureX)
- [x] Typographie claire et lisible

### ✅ Sections Principales
- [x] **Hero Section** - Présentation impactante avec CTA
- [x] **À Propos** - Valeurs et mission de l'entreprise
- [x] **Services** - 7 types d'assurance détaillés
- [x] **Pourquoi Nous Choisir** - Avantages concurrentiels
- [x] **FAQ** - Questions fréquentes avec accordéon
- [x] **Contact** - Formulaire et informations de contact
- [x] **Footer** - Liens utiles et informations légales

### ✅ Fonctionnalités Interactives
- [x] Menu mobile hamburger
- [x] Accordéon FAQ
- [x] Formulaire de contact avec validation
- [x] Bouton WhatsApp flottant
- [x] Smooth scrolling entre sections
- [x] Animations au scroll

### ✅ Optimisations
- [x] Performance optimisée
- [x] SEO-friendly
- [x] Accessibilité WCAG
- [x] Cross-browser compatible

## 📋 Services d'Assurance

1. **Assurance Automobile** - Protection complète des véhicules
2. **Assurance Habitation** - Couverture multirisque habitation
3. **Responsabilité Civile** - Protection contre les dommages causés
4. **Responsabilité Professionnelle** - Couverture activité professionnelle
5. **Assurance Tous Risques** - Protection maximale
6. **Assurance Décès** - Protection financière des proches
7. **Assurance Vie** - Épargne et transmission du patrimoine

## 📞 Informations de Contact

- **Téléphone** : 92125602
- **Email** : asurextgpartners@outlook.fr
- **Horaires** : Lundi - Vendredi, 7h30 - 18h00
- **WhatsApp** : Disponible via le bouton flottant

## 🚀 Installation et Déploiement

### Prérequis
- Navigateur web moderne
- Serveur web (optionnel pour le développement local)

### Installation Locale
```bash
# Cloner le repository
git clone [URL_DU_REPO]

# Naviguer dans le dossier
cd assurex-website

# Ouvrir index.html dans un navigateur
# Ou utiliser un serveur local
python -m http.server 8000
# Puis ouvrir http://localhost:8000
```

### Structure des Fichiers
```
assurex-website/
├── index.html                 # Page principale
├── styles.css                 # Styles personnalisés
├── script.js                  # JavaScript interactif
├── project-requirement-and-content.md  # Documentation du projet
└── README.md                  # Ce fichier
```

## 🎨 Palette de Couleurs

- **Primaire** : `#1E40AF` (Bleu AssureX)
- **Primaire Claire** : `#3B82F6`
- **Primaire Foncée** : `#1E3A8A`
- **Secondaire** : `#0EA5E9` (Bleu ciel)
- **Accent** : `#F97316` (Orange)

## 📱 Responsive Design

- **Mobile** : 320px - 768px
- **Tablet** : 768px - 1024px
- **Desktop** : 1024px+

## 🔧 Personnalisation

### Modifier les Couleurs
Éditer les variables CSS dans `tailwind.config` :
```javascript
colors: {
    'primary': '#1E40AF',
    'primary-light': '#3B82F6',
    'primary-dark': '#1E3A8A',
    'secondary': '#0EA5E9',
    'accent': '#F97316',
}
```

### Ajouter du Contenu
1. Modifier le contenu HTML dans `index.html`
2. Ajouter les styles nécessaires dans `styles.css`
3. Implémenter les interactions dans `script.js`

## 📊 Performance

- **Temps de chargement** : < 3 secondes
- **Score Lighthouse** : 90+
- **Optimisation mobile** : Oui
- **Compression images** : Recommandée

## 🔒 Sécurité

- Validation côté client des formulaires
- Protection contre les injections XSS
- Liens externes sécurisés
- Headers de sécurité recommandés

## 📈 Analytics & Tracking

Le code inclut des hooks pour :
- Google Analytics 4
- Tracking des conversions
- Mesure de l'engagement
- Suivi des formulaires

## 🐛 Résolution de Problèmes

### Problèmes Courants

**Le menu mobile ne fonctionne pas**
- Vérifier que `script.js` est bien chargé
- Contrôler la console pour les erreurs JavaScript

**Les animations ne se déclenchent pas**
- Vérifier le support CSS dans le navigateur
- S'assurer que `styles.css` est chargé

**Le formulaire ne s'envoie pas**
- Implémenter un backend pour traiter les soumissions
- Configurer un service comme Formspree ou Netlify Forms

## 🚀 Améliorations Futures

- [ ] Intégration CMS (Strapi, Contentful)
- [ ] Système de réservation en ligne
- [ ] Chat en direct
- [ ] Calculateur de devis automatique
- [ ] Espace client sécurisé
- [ ] Blog/Actualités
- [ ] Témoignages clients
- [ ] Certificats et accréditations

## 📄 Licence

Ce projet est la propriété d'AssureX Insurance Broker. Tous droits réservés.

## 👨‍💻 Support

Pour toute question technique ou demande de modification :
- Email : [EMAIL_TECHNIQUE]
- Documentation : Voir `project-requirement-and-content.md`

---

**AssureX** - Votre partenaire de confiance en assurance 🛡️ 