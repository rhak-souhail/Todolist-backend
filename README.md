<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
Todo App - Backend

## Stack technique
NestJS comme framework backend

Prisma pour l'accès à la base de données MySQL

Base de données : MySQL j'ai créer la base de donnée hdmtestdev

Utilisation de Yarn comme gestionnaire de paquets

Architecture orientée Use Cases pour séparer la logique métier

## Installation
Cloner le dépôt GitHub et se positionner dans le dossier du projet.

Installer les dépendances avec la commande yarn install.

Configurer les accès à la base de données dans le fichier .env.

Exécuter les migrations Prisma pour créer les tables nécessaires.

Lancer le serveur avec yarn start:dev.

## architecture
J'ai opté pour une architecture inspirée de la Clean Architecture, avec une séparation claire entre les couches :

Controllers : gestion des routes HTTP.

Use Cases : logique métier.

Repositories : accès aux données via Prisma.

DTOs : transfert de données entre les couches.

Cette structure m'a permis de maintenir un code organisé et facilement testable.

## Fonctionnalités

Le backend offre les endpoints suivants :

GET /tasks : récupérer toutes les tâches.

POST /tasks : créer une nouvelle tâche.

PATCH /tasks/:id : mettre à jour une tâche existante.

DELETE /tasks/:id : supprimer une tâche.

## Choix techniques et défis rencontrés
Utilisation de Prisma
Prisma pour sa simplicité et sa génération automatique de types TypeScript. Cela m'a permis de bénéficier d'une autocomplétion efficace et de réduire les erreurs liées aux types.

Gestion des erreurs
J'ai mis en place une gestion des erreurs centralisée pour capturer et traiter les exceptions de manière cohérente, en renvoyant des messages clairs aux utilisateurs de l'API.

Validation des données
Pour assurer la validité des données entrantes, j'ai utilisé les décorateurs de validation de NestJS, tels que @IsString() et @IsNotEmpty(), dans les DTOs.


## ⚠ Problèmes rencontrés & solutions

### ❌ Prisma: erreur XOR lors de la création d’une tâche
*Cause :* Le champ id n’existe pas dans TaskCreateInput.

*Solution :* Séparer proprement la logique create / update dans TaskRepository au lieu de mélanger les types Prisma avancés.

Frontend
Le frontend associé à cette API est disponible à l'adresse suivante :
https://github.com/rhak-souhail/Todolist-frontend

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
