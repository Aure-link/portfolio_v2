export default {
    menu: {
      about: "A propos",
      skills: "Mes compétences",
      works: "Travaux",
    },
    slide: {
      title: "Developpeur & UX Designer",
    },
    about: {
      title: "Je suis aurélien, Développeur front-end et UX Designer Français",
      text: "J'ai une bonne expérience dans la création et la modification de site internet. Je suis à l'aise en Html, Css JQuery et Javascript. J'ai l'habitude de travailler sur des frameworks front-end comme Vue.js, avec des framework php comme symfony et aussi les API. J'aime trouver la meilleure approche pour développer des sites. N'hésitez pas à me contacter par email avec votre idée de projet.",
      link: "Télécharger mon CV",
    },
    skills: {
      title: "Mes compétences",
      item: [
          {
              logo: "<ion-icon name='logo-html5'></ion-icon>",
              title: "Html",
              content: "Une solide base en Html5 qui me permet de facilement créer, modifier et développer de nombreux types de projets pour le web et pourquoi pas pour plus ?",
          },
          {
              logo: "<ion-icon name='logo-css3'></ion-icon>",
              title: "CSS",
              content: "Allant de paire avec le Html, Css est un langage que j'apprécie particulièrement et qui est en évolution permanente. J'essaie toujours d'en apprendre le plus possible",
          },
          {
              logo: "<ion-icon name='logo-sass'></ion-icon>",
              title: "SASS/SCSS",
              content: "En tant qu'extension du CSS, le SCSS est obligatoire pour moi depuis quelques années maintenant. Je l'utilise dans tous mes projets, le gain de temps est fabuleux.",
          },
          {
              logo: "<ion-icon name='code-slash'></ion-icon>",
              title: "Framework PHP",
              content: "Les framworks Php sont aujourd'hui indispensables au développement d'applications, qu'elles soient complexes ou non. J'ai eu l'occasion de travailler avec Symfony et plus précisément TWIG.",
          },
          {
              logo: "<ion-icon name='logo-vue'></ion-icon>",
              title: "Framework front",
              content: "Les framworks Front sont, comme leurs cousins, aujourd'hui obligatoire. Le gain de productivité qu'ils apportent n'est absolument pas négligeable. J'avais hâte d'apprendre à les utiliser pour les Css et le Js.",
          },
          {
              logo: "<ion-icon name='logo-github'></ion-icon>",
              title: "Versionning",
              content: "Le versionnement via Github ou d'autres solutions permet la maintenance du code. Il était donc tout naturel que je l'utilise dans mes projets professionnels et personnels.",
          }
      ],
    },
    works: {
      title: "Travaux récents",
      item: [
        {
          id: 1,
          smallTitle: "Actizzy",
          tag: "UX & Front-end",
          title: "Création du site web Actizzy",
          resume: "J'ai travaillé avec une collègue sur les parcours utilisateurs, benchmark et la création des wireframes. Dans un second temps, j'étais en charge du développement Front-end",
          link: "https://www.actizzy.com",
          img: "actizzy",
          alt: "image du site actizzy",
          date: "10/2018 - 08/2019",
          linkText: "Voir le projet" ,
          noLinkText: "Pas encore de projet",
      },
      {
          id: 2,
          smallTitle: "Le Figuier",
          tag: "Front-end",
          title: "Développement du site Le Figuier",
          resume: "Développement d'un site e-commerce sur Prestashop. Partant d'un thème existant. J'étais en charge de développement Front-end ainsi que de la modifcation du template.",
          link: "https://lefiguier.fr",
          img: "lefiguier",
          alt: "image du site lefiguier",
          date: "10/2018 - 08/2019",
          linkText: "Voir le projet",
          noLinkText: "Pas encore de projet",
      },
      {
          id: 3,
          smallTitle: "Smartfone",
          tag: "UX",
          title: "Reflection et wireframes du site Smartfone",
          resume: "Réalisation de toute la réflexion et de la partie recherche. Benchmark, interviews et wireframes on été créé au début de ce projet.",
          link: "",
          img: "smartfone",
          alt: "image des maquettes smartfone",
          date: "04/2018 - 09/2018",
          linkText: "Voir le projet",
          noLinkText: "Pas encore de projet",
      },
      {
        id: 4,
        smallTitle: "Portfolio",
        tag: "Front-end",
        title: "Création de mon portfolio",
        resume: "Réalisation de mon portfolio avec Vue.js, Nuxt.js et gituhub pour la gestion du versionning. ",
        link: "https://aurelienguilliet.fr/",
        img: "portfolio",
        alt: "image des maquettes smartfone",
        date: "01/2021 - 02/2021",
        linkText: "Voir le projet",
        noLinkText: "Pas encore de projet",
    }
      ]
    },
    footer: {
      copyright: "Tous droits réservés."
    }
  }
  