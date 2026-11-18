// content.js : TOUT le contenu de l'app "Ma Non 🤍".
// Tu peux modifier les textes ici sans toucher au reste de l'app.
// Règles : garde les guillemets "..." autour de chaque texte, et la virgule à la fin de chaque ligne.
// Si tu veux un guillemet dans un texte, écris \" (antislash puis guillemet).
//
// Les textes des stops, les gages et le message final viennent du cahier des charges V4 (annexes A et B), copiés tels quels.
// Les textes d'interface (section "ui") sont écrits par Claude Code : à relire.
// Le champ "indice_avant" est l'indice affiché pendant le trajet AVANT d'arriver au stop.
// Pour le stop 1, l'indice est provisoire (le brief n'en fournit pas).

const CONTENT = {
  appName: "Ma Non 🤍",
  appNameCourt: "Ma Non",

  // Vocabulaire (section 2 du brief)
  vocab: {
    gage: "Décret royal 📜",
    jus: "Le jus du trône 🥃"
  },

  // Écran d'accueil (section 4.1 du brief, texte à valider)
  accueil: {
    titre: "Ma Non 🤍",
    texte: "Aujourd'hui, c'est toi la reine. 14 escales, des histoires vraies et absurdes, et à chaque fois un décret royal ou un jus du trône. Ton chauffeur s'occupe de la route.",
    bouton: "Démarrer le règne 👑",
    continuer: "Continuer le règne 👑",
    voirCarte: "Voir le parcours 🗺️"
  },

  // Textes d'interface
  ui: {
    progression: "Stop {n} sur {total}",
    carte: {
      titre: "Ton parcours royal 🗺️",
      sousTitre: "{done} sur {total} escales passées en revue",
      statut: {
        verrouille: "Pas encore",
        enRoute: "En route 🚗",
        enCours: "En cours",
        valide: "Validé ✅",
        passe: "Passé ⏭️"
      },
      titreMystere: "Stop {n} : mystère",
      priorite: {
        essentiel: "essentiel",
        bonus: "bonus"
      },
      continuer: "Continuer →",
      relire: "Relire"
    },
    route: {
      titre: "En route vers le stop {n}",
      indiceTitre: "Ton indice 🔮",
      waze: "Ouvrir dans Waze 🚗",
      maps: "Ouvrir dans Maps 🗺️",
      copier: "Copier l’adresse 📋",
      copie: "Adresse copiée ✅",
      arrives: "OK, on est arrivés ! 🎉",
      bonus: "Stop bonus : on peut le sauter si on est en retard."
    },
    histoire: {
      suivant: "Suivant →",
      retour: "← Retour",
      versMorale: "La morale 🎓 →",
      carteBouton: "🗺️",
      adresseIcone: "📍",
      infosIcone: "ℹ️",
      cartePosition: "Carte {i} sur {n}"
    },
    morale: {
      questionTitre: "Question de la route 🛣️ (facultative)",
      suivant: "Décret ou jus ? →"
    },
    choix: {
      titre: "Décret royal ou jus du trône ?",
      jusTitre: "Le jus du trône 🥃",
      jusSousTitre: "Un petit shot léger. Pas de limite de nombre.",
      jusBouton: "Je prends le jus du trône",
      decretTitre: "Le décret royal 📜",
      decretSousTitre: "Un seul décret, écrit à l’avance. Il ne change jamais.",
      decretBouton: "Voir le décret",
      decretRevele: "Décret royal 📜",
      executer: "J’exécute le décret",
      finalementJus: "Finalement, le jus !",
      finalementDecret: "Finalement, voir le décret",
      validerDecret: "Décret exécuté ✅",
      validerJus: "Santé ! 🥂",
      recapJus: "Tu as pris le jus du trône 🥃",
      recapDecret: "Tu as exécuté le décret 📜",
      recapPasse: "Stop passé ⏭️",
      avantExecution: "Fais-le, puis appuie sur le bouton.",
      avantJus: "Bois, puis appuie sur le bouton."
    },
    fin: {
      stopSuivant: "Stop suivant →",
      voirHonneur: "Voir le tableau d’honneur 🏆",
      indiceSuiteTitre: "La suite 🔮",
      confirmationJus: [
        "Le trône est content. Le jus aussi.",
        "Une gorgée pour la couronne, une pour le royaume.",
        "Décision royale : hydratation. Personne n’ose contester.",
        "Les chroniqueurs notent : la reine a trinqué avec elle-même. Classe.",
        "Le chauffeur n’a rien bu, rien vu, rien entendu. La monarchie, quoi.",
        "Le jus du trône a été reçu avec tous les honneurs.",
        "Ça, c’est de la gouvernance."
      ],
      confirmationDecret: [
        "Décret exécuté. Les chroniqueurs ont tout noté, et ils ont adoré.",
        "Le royaume est sous le choc. Un choc positif.",
        "Courage royal confirmé. Les témoins hésitent entre rire et applaudir.",
        "Le chauffeur a tout vu et jure de ne rien raconter. Il ment.",
        "Une loi de plus appliquée avec panache.",
        "Le peuple est conquis, ou en tout cas il regarde.",
        "Décret exécuté. La couronne tient toujours droit."
      ]
    },
    passer: {
      bouton: "Passer ce stop",
      aide: "Maintiens 2 secondes",
      titre: "Passer ce stop ?",
      texte: "Il sera marqué comme passé et n’entrera pas dans le tableau d’honneur.",
      oui: "Oui, on passe",
      non: "Non, on y va",
      toast: "Stop passé. La reine avait d’autres obligations."
    },
    recommencer: {
      titre: "Recommencer ?",
      texte: "Tout effacer et repartir du début ?",
      oui: "Oui, recommencer",
      non: "Non"
    },
    final: {
      honneurTitre: "Tableau d’honneur 🏆",
      jus: {
        label: "jus du trône 🥃",
        zero: "Aucun jus. Le trône est vexé.",
        autre: "Le trône est hydraté."
      },
      decrets: {
        label: "décrets exécutés 📜",
        zero: "Aucun décret. La couronne reste au vestiaire.",
        autre: "La loi, c’est la loi."
      },
      passes: {
        label: "stops passés ⏭️",
        zero: "Aucun stop passé. Respect.",
        autre: "Quelques obligations royales ailleurs."
      },
      revoir: "Revoir le parcours 🗺️"
    },
    hub: {
      histoire: "Relire l’histoire 📖",
      morale: "Relire la morale 🎓",
      choix: "Voir ton choix",
      continuer: "Continuer →",
      passeNote: "Stop passé : tu peux quand même lire l’histoire."
    },
    debug: {
      banniere: "MODE TEST : tout est débloqué. Ta vraie progression n’est pas touchée.",
      quitter: "Quitter"
    },
    divers: {
      retourCarte: "Carte 🗺️",
      fermer: "Fermer",
      lienExterneNote: "S’ouvre dans le navigateur."
    }
  },

  // Les 14 stops
  stops: [
    // ===== Stop 1 : atomium (essentiel) =====
    {
      id: "atomium",
      ordre: 1,
      priorite: "essentiel",
      titre: "L'Atomium, prévu pour six mois",
      adresse: "Square de l'Atomium, 1020 Laeken (plateau du Heysel)",
      lat: null,
      lon: null,
      maps_query: "Atomium, Square de l'Atomium, 1020 Bruxelles",
      indice_avant: "Premier stop : quelque chose de très grand, très brillant, et très mal parti pour disparaître.",
      illustration: "assets/stop-01.svg",
      illustration_sujet: "une boule géante en acier qui regarde sa montre, avec un petit panneau \"temporaire\"",
      infos_pratiques: "On le regarde de l'extérieur. Pas besoin de monter.",
      histoire: [
        {
          texte: "Bienvenue à l'Atomium : un cristal de fer agrandi 165 milliards de fois. Oui, quelqu'un a dit \"agrandissons un atome de fer à 102 mètres de haut\" et personne n'a dit non."
        },
        {
          texte: "Il a été construit pour l'Expo 58, la grande foire de Bruxelles. Il était conçu pour durer six mois. Il est toujours là, 68 ans plus tard. En Belgique, rien ne dure autant que le provisoire."
        },
        {
          texte: "Son nom vient d'\"atome\" et d'\"aluminium\", le métal dont il était recouvert. Aujourd'hui, c'est de l'acier inoxydable. L'aluminium d'origine a été revendu en souvenirs : un morceau d'environ 2 mètres est parti pour 1.000 euros."
        },
        {
          texte: "Des tests en soufflerie ont montré qu'il se serait renversé avec un vent de 80 km/h. Alors on a ajouté des piliers sous les trois boules du bas. La solution : poser des béquilles."
        },
        {
          texte: "À l'inauguration, son ascenseur était le plus rapide d'Europe : 22 personnes jusqu'en haut en 23 secondes. Aujourd'hui, 600.000 personnes par an viennent voir quelque chose qui devait disparaître."
        }
      ],
      lien_externe: null,
      morale: {
        titre: "La morale de l’histoire",
        texte: "Prévu pour six mois, toujours debout 68 ans plus tard, avec des béquilles. Un passage à vide, c'est pareil : c'est censé être temporaire, et un jour tu le visiteras en touriste.",
        question: "Si on t'agrandissait 165 milliards de fois, tu ferais quoi en premier ?"
      },
      gage: {
        texte: "Tiens la pose d'un atome de fer qui vient d'apprendre qu'on va l'agrandir 165 milliards de fois : panique silencieuse pendant 10 secondes, puis tu salues la foule comme une star."
      }
    },

    // ===== Stop 2 : koekelberg (essentiel) =====
    {
      id: "koekelberg",
      ordre: 2,
      priorite: "essentiel",
      titre: "La basilique qui a mis 64 ans",
      adresse: "Parvis de la Basilique 1, 1083 Ganshoren",
      lat: 50.86667,
      lon: 4.31722,
      maps_query: "Basilique de Koekelberg, Parvis de la Basilique 1, 1083 Ganshoren",
      indice_avant: "Prochain stop : un chantier qui s'est excusé pendant 64 ans. Quelqu'un a promis 'deux minutes'.",
      illustration: "assets/stop-02.svg",
      illustration_sujet: "une basilique géante avec des ouvriers minuscules, un calendrier qui défile et une couronne posée sur la coupole",
      infos_pratiques: "Parvis en accès libre. Le parc Élisabeth est en face. Montée au panorama payante : horaires non vérifiés.",
      histoire: [
        {
          texte: "Léopold II adore Paris. Il veut son Sacré-Coeur de Montmartre à lui, à Bruxelles. En 1905, il pose la première pierre, pendant les fêtes des 75 ans de l'indépendance."
        },
        {
          texte: "Le plan : un temple néo-gothique grandiose. La réalité de 1914 : des fondations. Juste des fondations. Les ouvriers avaient quand même déjà enfoncé 1.438 pieux dans le sol."
        },
        {
          texte: "Arrive la guerre. Puis les soucis d'argent. Puis une deuxième guerre. Pour des raisons de coût, le projet néo-gothique est modifié : ce sera de l'Art déco, signé Albert Van Huffel et terminé par Paul Rome."
        },
        {
          texte: "La basilique est consacrée en 1951, la coupole est finie en 1969. Soixante-quatre ans de chantier : le plus long \"encore deux minutes, on arrive\" de Belgique."
        },
        {
          texte: "La coupole pèse 44.000 tonnes et son panorama est à plus de 50 mètres de haut. En face, le parc Élisabeth : 17 hectares, et des centaines de perruches à collier qui se rassemblent dans les arbres la plupart des soirs."
        }
      ],
      lien_externe: null,
      morale: {
        titre: "La morale de l’histoire",
        texte: "Un roi lance le chantier, deux guerres le sabotent, et 64 ans plus tard ça passe pour un chef-d'oeuvre. Le talent, c'est de ne pas abandonner.",
        question: "Si tu étais Reine des Belges, qu'est-ce que tu ferais construire ?"
      },
      gage: {
        texte: "Mets la veste fluo jaune de secours et demande aux gens de l'arrêt de bus d'évacuer, parce qu'une livraison de pierres arrive. Retire ensuite la veste, mets une casquette, repasse et dépose un sac plein de pierres que tu auras ramassées au préalable dans le parc en face. Reste sérieuse. Sur le trottoir uniquement, ne gêne pas les bus, et si l'arrêt est vide, fais-le quand même."
      }
    },

    // ===== Stop 3 : dilbeek (bonus) =====
    {
      id: "dilbeek",
      ordre: 3,
      priorite: "bonus",
      titre: "Dilbeek, le château des mangeurs de lapin",
      adresse: "Kasteel de Viron (hôtel de ville de Dilbeek)",
      lat: 50.8479,
      lon: 4.2636,
      maps_query: "Kasteel de Viron, Dilbeek",
      indice_avant: "Prochain stop : un château avec un calendrier dedans, et des habitants qui ont mangé un truc qu'ils n'auraient pas dû servir à un empereur.",
      illustration: "assets/stop-03.svg",
      illustration_sujet: "un empereur outré devant une assiette de lapin, château Tudor derrière",
      infos_pratiques: "On regarde le château depuis l'extérieur (c'est l'hôtel de ville).",
      histoire: [
        {
          texte: "À Dilbeek, les habitants sont surnommés les konijnenfretters : les mangeurs de lapin."
        },
        {
          texte: "Selon la tradition, Charles Quint, de passage dans la forteresse du coin, s'est vu servir du lapin à la place de son lièvre préféré. Résultat : un surnom qui dure depuis des siècles. Un seul repas raté, et on te le rappelle 500 ans plus tard."
        },
        {
          texte: "Le château actuel date de 1862-1863, dans le style Tudor, sur les ruines d'une forteresse du 14e siècle. Il a 12 tours, 52 salles, 365 fenêtres et 7 escaliers. Ça fait penser à un calendrier : 12 mois, 52 semaines, 365 jours, 7 jours par semaine."
        },
        {
          texte: "Aujourd'hui, ce château de 365 fenêtres est l'hôtel de ville de Dilbeek : la commune l'a racheté en 1923. Payer ses taxes dans un château-calendrier, c'est la seule version agréable de l'exercice."
        },
        {
          texte: "Résumé : des mangeurs de lapin, un château qui est un calendrier, et le tout sert de mairie. Voilà Dilbeek."
        }
      ],
      lien_externe: null,
      morale: {
        titre: "La morale de l’histoire",
        texte: "Un seul lapin servi à l'empereur, et des siècles plus tard tout un village porte encore le surnom. Une bêtise bien placée, c'est une gloire qui dure.",
        question: "Quel plat servi à ta place te ferait quitter la table, vexée comme un empereur ?"
      },
      gage: {
        texte: "Marche dans la rue en criant 'Lapin, lapin, lapin, gentiiiiiil lapin' pendant 15 secondes maximum, pas face à une fenêtre."
      }
    },

    // ===== Stop 4 : sint-anna-pede (essentiel) =====
    {
      id: "sint-anna-pede",
      ordre: 4,
      priorite: "essentiel",
      titre: "Sint-Anna-Pede, l'église du tableau où tout le monde tombe",
      adresse: "Sint-Annakerk, Herdebeekstraat 176, 1701 Itterbeek",
      lat: 50.83167,
      lon: 4.23333,
      maps_query: "Sint-Annakerk, Herdebeekstraat 176, 1701 Itterbeek",
      indice_avant: "Prochain stop : une peinture où tout le monde suit la personne qui tombe. Un village jure que l'église du fond est la sienne.",
      illustration: "assets/stop-04.svg",
      illustration_sujet: "une file de personnages qui tombent un par un dans un fossé, une petite église au fond avec un panneau \"c'est la nôtre\"",
      infos_pratiques: null,
      histoire: [
        {
          texte: "En 1568, Pieter Bruegel l'Ancien peint \"La Parabole des aveugles\", aujourd'hui à Naples, au musée de Capodimonte. Une file d'aveugles, un guide qui tombe dans le fossé, et tous les suivent. L'idée : quand un aveugle en guide un autre, ils finissent tous les deux dans le fossé. Le premier accident de GPS de l'histoire de l'art."
        },
        {
          texte: "Au fond du tableau, une église. Les habitants de Sint-Anna-Pede sont absolument certains que c'est la leur. Le grand spécialiste de Bruegel, Manfred Sellink, n'est pas convaincu : pas assez de preuves. Le village n'a pas apprécié."
        },
        {
          texte: "Les indices du village : un toit qui commence à côté de la tour, ce qui est rare, et un fossé qui pourrait être la Pedebeek, le ruisseau du coin. Un village qui se bat pour avoir une église dans un tableau où tout le monde finit dans un fossé."
        },
        {
          texte: "Il y a aussi dans le village un petit château, le Klein Sint-Anna-kasteeltje, où, selon la légende, Charles Quint, Bruegel et Louis XIV auraient dormi. Un lit très demandé. Et Charles Quint était déjà à Dilbeek pour son lapin. Ce type voyageait vraiment partout."
        },
        {
          texte: "Mission : ouvre le tableau sur ton téléphone, compare l'église, et ne tombe pas dans le fossé."
        }
      ],
      lien_externe: {
        label: "Ouvrir le tableau",
        url: "https://en.wikipedia.org/wiki/The_Blind_Leading_the_Blind"
      },
      morale: {
        titre: "La morale de l’histoire",
        texte: "Quand tout le monde suit le même guide, tout le monde finit dans le même fossé. Regarder où on met les pieds, c'est la base. Tomber dans un chef-d'oeuvre, c'est le bonus.",
        question: "Si ta semaine était un tableau célèbre, ce serait lequel ?"
      },
      gage: {
        texte: "Avec Samy à côté de toi, qui te tient par le coude, fais le tour du pâté de maisons les yeux bandés, sur un trottoir sans circulation. Si le tour est trop dangereux, raccourcis-le."
      }
    },

    // ===== Stop 5 : gaasbeek (essentiel) =====
    {
      id: "gaasbeek",
      ordre: 5,
      priorite: "essentiel",
      titre: "Gaasbeek, le château en carton-pâte",
      adresse: "Kasteelstraat 40, 1750 Gaasbeek",
      lat: null,
      lon: null,
      maps_query: "Kasteelstraat 40, 1750 Gaasbeek",
      indice_avant: "Prochain stop : un château qui est en fait un décor de théâtre, et un arbre qui pose plus que toi.",
      illustration: "assets/stop-05.svg",
      illustration_sujet: "château médiéval avec un filtre sépia très exagéré, un grand chêne en pose de mannequin et une marquise qui tient une photocopieuse",
      infos_pratiques: "Le parc est ouvert jusqu'au coucher du soleil. Le château est fermé. Compte 15 minutes de marche depuis le parking.",
      histoire: [
        {
          texte: "Au 14e siècle, Everard 't Serclaes est assassiné sur ordre de Sweder van Abcoude. Les Bruxellois, furieux, marchent sur Gaasbeek et assiègent le château. Quand on touche à un Bruxellois, il revient avec toute la ville."
        },
        {
          texte: "En 1615, René de Renesse l'achète, le fait réparer et construit des bâtiments dans le parc."
        },
        {
          texte: "Plus tard, la marquise Marie Arconati-Visconti, dernière propriétaire, restaure le château à fond, façon romantique : un voyage dans le temps vers le 16e siècle, vu à travers les lunettes du 19e. Elle a même copié la salle des chevaliers de Pierrefonds, en l'adaptant à l'histoire locale. Le copier-coller, version 1900."
        },
        {
          texte: "En 1921, elle donne le château et son parc d'environ 40 hectares à l'État belge. Elle meurt deux ans plus tard. Le château ouvre au public en 1924. Morale historique : se débarrasser de sa maison avant de mourir, c'est du travail propre."
        },
        {
          texte: "Dans le parc, un chêne de 250 à 260 ans, 5,15 mètres de tour, apparaît sur les photos du château depuis les plaques de verre. Il a posé pour plus de photos que n'importe quel influenceur."
        }
      ],
      lien_externe: null,
      morale: {
        titre: "La morale de l’histoire",
        texte: "Une marquise a copié un château français, l'a déguisé en Moyen Âge qui n'a jamais existé, et ça s'appelle du patrimoine. Fake it until it's classé.",
        question: "Quelle pièce tu ferais construire en premier dans ton château, et pour quoi faire ?"
      },
      gage: {
        texte: "Fais une révérence à un arbre en disant 'Moi, maîtresse de ces terres, je t'accepte parmi nous', puis fais un câlin à cet arbre. Répète avec 20 arbres au total."
      }
    },

    // ===== Stop 6 : beersel (bonus) =====
    {
      id: "beersel",
      ordre: 6,
      priorite: "bonus",
      titre: "Beersel, le château que Bruxelles a cassé puis réparé",
      adresse: "Château de Beersel, Beersel",
      lat: 50.76583,
      lon: 4.3,
      maps_query: "Chateau de Beersel",
      indice_avant: "Prochain stop : un château rond, des Bruxellois qui cassent tout, et la facture.",
      illustration: "assets/stop-06.svg",
      illustration_sujet: "un château rond en briques avec une milice de Bruxelles qui tient une facture au lieu d'un drapeau",
      infos_pratiques: "On regarde le château de l'extérieur. Horaires non vérifiés.",
      histoire: [
        {
          texte: "Le château de Beersel a été construit vers 1300-1310, puis reconstruit à partir de 1357 sous sa forme actuelle : ronde, avec trois grosses tours et une petite. Il est surtout en briques, ce qui était rare pour un château de l'époque."
        },
        {
          texte: "En 1356, des soldats du comté de Flandre l'ont capturé et pillé. Il avait donc subi un cambriolage avant même d'avoir fini sa décoration."
        },
        {
          texte: "En 1488 puis 1489, les milices de Bruxelles l'ont assiégé pendant les révoltes contre Maximilien. La deuxième fois, les rebelles ont utilisé des canons fournis par Louis XI, roi de France, et le château est tombé après plusieurs jours."
        },
        {
          texte: "Après la défaite des rebelles, Maximilien a ordonné à Bruxelles de payer la remise en état. Tu casses, tu paies. Les travaux ont transformé les tours pour qu'elles accueillent des canons."
        },
        {
          texte: "À partir de 1796, le château est inoccupé. En 1818, on y installe une usine de coton. Un château du 14e siècle qui finit en usine de coton. Il est donné en 1928 à une association d'amis du château, et reste aujourd'hui l'un des mieux conservés de Belgique."
        },
        {
          texte: "Victor Hugo l'a visité en 1877 et lui a écrit un poème. Il est aussi dans une bande dessinée de Suske et Wiske de 1954, \"De schat van Beersel\"."
        }
      ],
      lien_externe: null,
      morale: {
        titre: "La morale de l’histoire",
        texte: "Bruxelles a cassé le château, puis Bruxelles a payé la réparation. Ça arrive à tout le monde. Et l'usine de coton a fini en monument.",
        question: "Si tu devais assiéger une seule chose dans ta vie, ce serait quoi ?"
      },
      gage: {
        texte: "Déclare le siège du château : 'Je suis la milice de Bruxelles, rendez-vous !', trois fois, avec un canon imaginaire (un 'boum' à chaque tir)."
      }
    },

    // ===== Stop 7 : halle (essentiel) =====
    {
      id: "halle",
      ordre: 7,
      priorite: "essentiel",
      titre: "Basilique Saint-Martin, Halle",
      adresse: "Basilique Saint-Martin, Halle (Hal)",
      lat: null,
      lon: null,
      maps_query: "Basilique Saint-Martin, Halle",
      indice_avant: "Prochain stop : une Vierge noire qui fait du handball. Et un truc dans une bière qui s'appelle le diable.",
      illustration: "assets/stop-07.svg",
      illustration_sujet: "la Vierge noire qui réceptionne des boulets de canon dans son manteau comme un gardien de but",
      infos_pratiques: "Horaires non vérifiés. À voir de l'extérieur si c'est fermé.",
      histoire: [
        {
          texte: "Dans la basilique Saint-Martin vit une Vierge noire. Selon la tradition, un croisé, Louis IV de Thuringe, aurait envoyé la statue à sa femme Élisabeth de Hongrie. Elle passe par héritage jusqu'à Mathilde de Hollande, qui l'offre à l'église en 1267."
        },
        {
          texte: "Avant l'église, un chêne sacré portant une statue de Vierge était déjà vénéré ici. Les restes du tronc sont conservés dans la crypte. Un arbre avec une carrière plus longue que celle de la plupart des politiciens."
        },
        {
          texte: "Selon la légende, lors d'un siège de la ville par une armée protestante, la Vierge apparaît sur les remparts et réceptionne les boulets dans son giron. La poudre la noircit. Gardien de but, version pré-Courtois."
        },
        {
          texte: "32 de ces boulets sont encore dans l'église. Les sources ne s'accordent pas sur la date du siège (1489, 1580 ou fin du 15e siècle). Alors on dit simplement : selon la légende."
        },
        {
          texte: "Et la bière traditionnelle de Halle s'appelle la Duivelsbier, la bière du diable. Une Vierge d'un côté, une bière du diable de l'autre : Halle fait dans l'équilibre."
        }
      ],
      lien_externe: null,
      morale: {
        titre: "La morale de l’histoire",
        texte: "Elle a reçu des boulets de canon en pleine robe, elle en est ressortie noire de poudre, et on a construit une basilique pour elle. Aujourd'hui, 32 de ces boulets sont exposés comme des trophées. Ce qui t'a blessée peut devenir ce que tu montres avec fierté.",
        question: "Si tu avais 32 boulets de canon à exposer chez toi, ils représenteraient quoi ?"
      },
      gage: {
        texte: "Crie à voix haute, comme une annonce au micro, trois choses dont tu es fière."
      }
    },

    // ===== Stop 8 : lembeek (bonus) =====
    {
      id: "lembeek",
      ordre: 8,
      priorite: "bonus",
      titre: "Lembeek, le village où l'air fait la bière",
      adresse: "Brouwerij Boon, Fonteinstraat 65, 1502 Lembeek",
      lat: null,
      lon: null,
      maps_query: "Brouwerij Boon, Fonteinstraat 65, 1502 Lembeek",
      indice_avant: "Prochain stop : une gare qui a un problème de voisinage avec une brasserie, et du vent qui travaille pour la bière.",
      illustration: "assets/stop-08.svg",
      illustration_sujet: "un nuage de levures sauvages en pyjama qui entre dans une cuve de brasserie la nuit, avec une gare à côté",
      infos_pratiques: "On regarde la brasserie de l'extérieur. Si la boutique est fermée, le gage se fait à la porte.",
      histoire: [
        {
          texte: "Lembeek, 7.256 habitants, commune de Halle, sur la Senne. La gare est juste à côté de la brasserie. Ça ne s'invente pas."
        },
        {
          texte: "Ici, on fabrique du lambic et de la gueuze depuis des siècles. Selon une théorie, \"lambic\" serait simplement une mauvaise prononciation de Lembeek. La bière porte le nom du village, mal prononcé. Elle est née d'une faute de diction."
        },
        {
          texte: "Le secret : la fermentation est spontanée. Les levures sauvages de l'air de la vallée de la Senne s'infiltrent dans les cuves ouvertes la nuit. Autrement dit, c'est l'air qui fait la bière. Le brasseur prépare les cuves, ouvre, et laisse des microbes entrer sans invitation."
        },
        {
          texte: "Personne ne sait vraiment d'où vient le nom Lembeek : peut-être d'\"alambic\", l'appareil à distiller. Même les experts haussent les épaules."
        },
        {
          texte: "La brasserie Boon remonte à une ferme-brasserie de 1680, et a été reprise à la fin des années 1970 par Frank Boon, qui lui a donné son nom. Elle garde la bière dans plus de 100 grands fûts en vieux chêne d'environ 8.000 litres chacun."
        }
      ],
      lien_externe: null,
      morale: {
        titre: "La morale de l’histoire",
        texte: "Le meilleur travail de la brasserie est fait par des microbes sauvages, entrés de nuit par la fenêtre. Parfois, la meilleure stratégie, c'est de laisser la fenêtre ouverte et de patienter.",
        question: "Quel invité sauvage est entré dans ta vie sans prévenir et a fini par la rendre meilleure ?"
      },
      gage: {
        texte: "Entre dans la brasserie et commande une bière en prononçant très mal le nom de la brasserie ou de la bière. Garde ton sérieux. Si c'est fermé, fais-le à la porte, face à Samy."
      }
    },

    // ===== Stop 9 : steenkerque (bonus) =====
    {
      id: "steenkerque",
      ordre: 9,
      priorite: "bonus",
      titre: "Steenkerque, la bataille qui a inventé une cravate",
      adresse: "Steenkerque (commune de Braine-le-Comte). Point 3 du parcours de l'office du tourisme : la chapelle des Deux Cerisiers.",
      lat: null,
      lon: null,
      maps_query: "Steenkerque, Braine-le-Comte",
      indice_avant: "Prochain stop : un coin où des soldats ont inventé une mode par accident, parce qu'on les a surpris en train de s'habiller.",
      illustration: "assets/stop-09.svg",
      illustration_sujet: "des soldats en désordre qui se noient dans leur propre cravate en dentelle, un petit panneau \"mode 1692\"",
      infos_pratiques: "Le stop exact est à confirmer sur place. On peut se contenter de s'arrêter dans le village.",
      histoire: [
        {
          texte: "Le 3 août 1692, près du village de Steenkerque, à environ 50 km au sud-ouest de Bruxelles, l'armée française du duc de Luxembourg bat une armée alliée anglo-hollandaise sous Guillaume d'Orange."
        },
        {
          texte: "Les Alliés ont lancé une attaque surprise. D'après Voltaire, les gentilshommes français ont dû se battre avec leurs cravates en désordre, nouées n'importe comment, parce qu'on ne leur avait pas laissé le temps de s'habiller correctement."
        },
        {
          texte: "Résultat : une mode est née. Le \"steinkerque\" (ou steinkirk) est une cravate en dentelle portée volontairement lâche, avec de longs bouts qui pendent. Une bataille mal préparée a donc créé un accessoire de mode. Le seul bon effet secondaire d'une défaite d'organisation."
        },
        {
          texte: "Côté britannique, c'était moins drôle : cinq régiments britanniques ont été complètement détruits. Le général Hugh Mackay est mort à la tête du régiment de son propre clan. On rapporte qu'au moment d'avancer, il aurait dit : \"que la volonté du Seigneur soit faite\"."
        },
        {
          texte: "Les Britanniques ont reproché leurs lourdes pertes au Hollandais Solms, qui commandait la cavalerie alliée. Il n'y a pas que dans les réunions de famille qu'on cherche un coupable."
        }
      ],
      lien_externe: null,
      morale: {
        titre: "La morale de l’histoire",
        texte: "Une attaque surprise, des soldats mal habillés, et plus de trois siècles plus tard on parle encore de leurs cravates. Un accident vestimentaire peut devenir un style : parfois, le style, c'est juste une erreur portée avec aplomb.",
        question: "Quelle erreur de ta vie est devenue, avec le temps, un style ?"
      },
      gage: {
        texte: "Noue ton écharpe n'importe comment autour du cou comme une cravate steinkerque, puis défile fièrement en annonçant 'On m'a attaquée par surprise pendant que je m'habillais'."
      }
    },

    // ===== Stop 10 : enghien (essentiel) =====
    {
      id: "enghien",
      ordre: 10,
      priorite: "essentiel",
      titre: "Enghien, la cité des Titjes",
      adresse: "Église Saint-Nicolas, Enghien (centre-ville)",
      lat: null,
      lon: null,
      maps_query: "Eglise Saint-Nicolas, Enghien",
      indice_avant: "Prochain stop : une horloge qui prétend perdre onze heures pour en gagner une, et des cloches qui se prennent pour un orchestre.",
      illustration: "assets/stop-10.svg",
      illustration_sujet: "une horloge avec cinq cadrans qui font la sieste, des cloches de carillon qui rigolent",
      infos_pratiques: "On regarde l'église et son horloge de l'extérieur. Le parc d'Enghien est un bonus de jour seulement (horaires de novembre inconnus).",
      histoire: [
        {
          texte: "Enghien, c'est aussi Edingen. La ville est sur la frontière linguistique, avec des facilités : on te répond dans la langue dans laquelle tu parles. Un pays où même les villes sont bilingues par obligation."
        },
        {
          texte: "Ses habitants sont les Enghiennois, mais le surnom local est le \"Titje\", l'équivalent du \"ketje\" bruxellois. Enghien, la cité des Titjes."
        },
        {
          texte: "L'horloge de l'église Saint-Nicolas : une mécanique de 1865, cinq cadrans (quatre sur la tour, un dans la salle des machines), un poids de 50 kilos remonté toutes les 50 minutes par un moteur. Il y a encore quelques années, une personne payée par la ville grimpait au clocher chaque jour pour la remonter à la main."
        },
        {
          texte: "Elle est réglée pour toujours avoir un peu d'avance. Pour passer à l'heure d'été, elle s'arrête 11 heures pendant la nuit (sur un cadran de 12 heures, 11 heures de retard, ça fait 1 heure d'avance). Pour l'heure d'hiver, elle s'arrête 1 heure. Elle se remet à l'heure grâce à un signal radio émis depuis l'Allemagne."
        },
        {
          texte: "Dans la tour, 51 cloches : le deuxième carillon le plus important de Wallonie."
        },
        {
          texte: "Et il existe une Enghien en France : Enghien-les-Bains, près de Paris. Elle porte ce nom à la suite d'une série d'héritages compliqués entre familles nobles. Le nom s'est exporté, sans le parc."
        }
      ],
      lien_externe: null,
      morale: {
        titre: "La morale de l’histoire",
        texte: "Pour gagner une heure, cette horloge s'arrête 11 heures. La logique est dingue, mais elle marche depuis 1865. Si ton emploi du temps a besoin d'une pause, tu sais quoi faire : rien, pendant 11 heures.",
        question: "Si tu pouvais arrêter le temps 11 heures par an, tu en ferais quoi ?"
      },
      gage: {
        texte: "Imite avec ta bouche un carillon de 51 cloches pendant 15 secondes, en tapant sur chaque 'cloche' avec un doigt."
      }
    },

    // ===== Stop 11 : silly (essentiel) =====
    {
      id: "silly",
      ordre: 11,
      priorite: "essentiel",
      titre: "Silly, le village qui s'appelle Silly",
      adresse: "Place Communale, 7830 Silly",
      lat: null,
      lon: null,
      maps_query: "Place Communale, 7830 Silly",
      indice_avant: "Prochain stop : un village dont le nom est une insulte affectueuse. Même sa bière sans alcool s'en vante.",
      illustration: "assets/stop-11.svg",
      illustration_sujet: "le panneau \"Silly\" en vedette, un cheval gris pommelé et une bouteille \"Be Silly\"",
      infos_pratiques: "La brasserie se visite uniquement sur rendez-vous. Ici, c'est le stop photo devant le panneau.",
      histoire: [
        {
          texte: "Bienvenue à Silly. Oui, c'est vraiment son nom. Il vient de la Sille, la rivière qui traverse la commune, un affluent de la Dendre."
        },
        {
          texte: "Les habitants s'appellent les Silliens et les Silliennes. En néerlandais, le village s'appelle Opzullik, et en picard, Chili. Donc tu es dans un village qui s'appelle aussi Chili. Le monde est bien fait."
        },
        {
          texte: "Un chroniqueur du Brussels Times raconte avoir vu une voiture marquée \"Silly Police\". La police la plus drôle de Belgique."
        },
        {
          texte: "La commune regroupe huit anciens villages, dont Bassilly. Oui. Bassilly."
        },
        {
          texte: "D'après Wikipédia, les habitants de Silly affichent le revenu annuel moyen le plus élevé de la province de Hainaut. Le village le plus silly de Belgique est aussi le plus riche du Hainaut."
        },
        {
          texte: "La brasserie de Silly existe depuis 1850, née dans une ferme appelée la Cense de la Tour. Jusqu'en 1955, elle utilisait cinq chevaux, dont un gris pommelé, traditionnellement porte-bonheur. En 1975, elle a racheté une brasserie d'Enghien, notre stop d'avant. Et elle produit une bière bio sans alcool qui s'appelle... Be Silly."
        }
      ],
      lien_externe: null,
      morale: {
        titre: "La morale de l’histoire",
        texte: "Un village qui s'appelle Silly a le revenu moyen le plus élevé du Hainaut. Conclusion : faire n'importe quoi paie. Pas toujours, mais assez souvent pour que ça se tente.",
        question: "Quelle est la chose la plus silly que tu aies faite sans le moindre regret ?"
      },
      gage: {
        texte: "Mets tes vêtements à l'envers (pull, veste, ce que tu peux) et prends une photo devant le panneau 'Silly' avec ta grimace la plus ridicule."
      }
    },

    // ===== Stop 12 : ath-hotel-de-ville (essentiel) =====
    {
      id: "ath-hotel-de-ville",
      ordre: 12,
      priorite: "essentiel",
      titre: "Ath, le combat de David contre Goliath",
      adresse: "Hôtel de ville, Grand-Place, Ath",
      lat: null,
      lon: null,
      maps_query: "Hotel de ville, Grand-Place, Ath",
      indice_avant: "Dernière ville : un enfant, une balle, et un géant qui peut perdre son sang-froid. Ça se joue à un trou.",
      illustration: "assets/stop-12.svg",
      illustration_sujet: "un petit garçon qui lance une balle vers une fenêtre dans le panier d'un géant en osier, avec un public stressé",
      infos_pratiques: "On est dans la ville des Géants. La grande fête a lieu le 4e week-end d'août. Ce soir, on joue le résumé.",
      histoire: [
        {
          texte: "Ath, la ville des Géants. Sept géants défilent à la ducasse : Goliath, Madame Goliath, Samson, l'Aigle à deux têtes, Ambiorix, Mademoiselle Victoire et le cheval Bayard."
        },
        {
          texte: "Devant l'hôtel de ville, David affronte Goliath chaque année. David est un enfant : en 2007, c'était un garçon de 8 ans. Avec le géant, il récite un dialogue appelé le Bonimée, qui date de la fin du 16e siècle. Puis il lance une balle."
        },
        {
          texte: "L'objectif : la balle doit atterrir dans la fenêtre du porteur, l'ouverture dans le panier du géant par laquelle la personne qui le porte voit où elle va. Un gamin doit viser le trou par lequel le géant regarde. Si ça rentre, Goliath et Madame dansent le Grand Gouyasse. Si ça rate, les géants quittent immédiatement le terrain. La pression sur un enfant de 8 ans : zéro, pas du tout."
        },
        {
          texte: "Quand David gagne, les Athois estiment que l'année sera festive et prospère. En 2006, le petit berger a raté son coup. En 2013, Goliath a eu le dernier mot, et une drache nationale s'est abattue sur la ville. En 2025, David a terrassé le géant. Un gamin qui décide du climat de toute une ville : et on se plaint du changement climatique."
        },
        {
          texte: "Après le combat, tout le monde mange la tarte à masteilles, aussi appelée tarte Gouyasse. Le dimanche, ce sont des moules."
        }
      ],
      lien_externe: null,
      morale: {
        titre: "La morale de l’histoire",
        texte: "Une ville entière dépend d'un gamin de 8 ans qui lance une balle dans un trou. On est tous un David à qui on demande trop. Heureusement, ça se mange ensuite, avec de la tarte.",
        question: "Quel Goliath tu viserais avec une seule balle, si tu étais sûre de ne pas être punie ?"
      },
      gage: {
        texte: "Danse le Grand Gouyasse, la danse des géants, devant le groupe d'inconnus le plus proche (ou devant Samy s'il n'y a personne) : très lente, bras en l'air, pendant 20 secondes, comme si tu portais un panier d'osier de 130 kilos."
      }
    },

    // ===== Stop 13 : ath-saint-julien (bonus) =====
    {
      id: "ath-saint-julien",
      ordre: 13,
      priorite: "bonus",
      titre: "Ath, le mariage de Goliath",
      adresse: "Église Saint-Julien, rue de Pintamont, Ath. Maison des Géants : rue de Pintamont 18.",
      lat: null,
      lon: null,
      maps_query: "Eglise Saint-Julien, Rue de Pintamont, Ath",
      indice_avant: "Tout près : une église où se déroule un mariage, avec un pantalon dont la vie va mal se terminer.",
      illustration: "assets/stop-13.svg",
      illustration_sujet: "Goliath en smoking trop petit devant l'église, avec un pantalon qui brûle au loin",
      infos_pratiques: "Ce stop est un bonus : à sauter si on est en retard.",
      histoire: [
        {
          texte: "Le samedi midi de la ducasse, la grosse cloche, Marie Pontoise, annonce le début officiel de la fête. Ensuite, on célèbre le mariage de Goliath et de sa femme devant l'église Saint-Julien."
        },
        {
          texte: "Goliath existe depuis très longtemps : on a fêté ses 500 ans en 1981, ce qui le fait naître vers 1481. Pendant plus de deux siècles, il a défilé célibataire. En juillet 1715, le conseil de la ville a décidé de lui donner une femme. Un mariage arrangé par une mairie, après environ 234 ans d'attente (calcul à partir de 1481)."
        },
        {
          texte: "À Ath, on ne dit pas \"Madame Goliath\" : les Athois disent simplement \"Madame\", et pour lui \"Monsieur\". Dans le patois d'Ath, Goliath s'appelle Gouyasse."
        },
        {
          texte: "La veille du mariage, le vendredi soir, on brûle la \"marronne\" de Gouyasse : son pantalon. Cette coutume date de 1987 et a été imaginée par les porteurs du géant. Oui : on brûle le pantalon du marié la veille du mariage."
        },
        {
          texte: "La ducasse était à l'origine une procession religieuse pour la dédicace de l'église Saint-Julien, à partir de la fin du 14e siècle. \"Ducasse\" vient de \"dédicace\". Aujourd'hui, elle est pour tout le monde."
        }
      ],
      lien_externe: null,
      morale: {
        titre: "La morale de l’histoire",
        texte: "Un géant célibataire pendant plus de deux siècles, marié sur décision de la mairie, dont on brûle le pantalon la veille du mariage. Si ta vie sentimentale te semble compliquée, il y a pire : Goliath.",
        question: "Si tu devais brûler le pantalon de quelqu'un la veille d'un grand moment, ce serait celui de qui ?"
      },
      gage: {
        texte: "Tire la corde d'une énorme cloche imaginaire de toutes tes forces et annonce l'ouverture officielle de la ducasse en criant 'DONG' sept fois, de plus en plus fort, sans hurler face aux fenêtres."
      }
    },

    // ===== Stop 14 : ath-burbant (essentiel) =====
    {
      id: "ath-burbant",
      ordre: 14,
      priorite: "essentiel",
      titre: "Tour Burbant, Ath",
      adresse: "Tour Burbant, rue du Gouvernement, Ath",
      lat: null,
      lon: null,
      maps_query: "Tour Burbant, Rue du Gouvernement, Ath",
      indice_avant: "Dernier stop : une tour qui tient debout depuis avant que ton arrière-arrière-arrière-grand-mère ait existé.",
      illustration: "assets/stop-14.svg",
      illustration_sujet: "un donjon carré éclairé de nuit avec des confettis, un petit David qui lève les bras et une couronne posée au sommet",
      infos_pratiques: "Pas de visite de la tour en novembre. On la regarde de l'extérieur. C'est le dernier stop.",
      histoire: [
        {
          texte: "Dernier stop : la tour Burbant. Vers 1160, le comte de Hainaut Baudouin IV achète une partie du domaine d'Ath et y construit un donjon carré pour protéger le nord du comté."
        },
        {
          texte: "La tour est terminée en 1166 : environ 20 mètres de haut, des murs de 4 mètres d'épaisseur (la source parle en pieds : 65 pieds de haut, 13 pieds d'épaisseur). La ville s'est développée à ses pieds."
        },
        {
          texte: "La tour est classée Patrimoine majeur de Wallonie. Elle tient debout depuis plus de 850 ans, sans une seule séance de coaching."
        },
        {
          texte: "Goliath mesure 3,75 mètres mais ne pèse que 130,5 kg : il est en osier. Le régime parfait."
        },
        {
          texte: "La devise d'Ath : \"Les Athois ne périront pas.\""
        },
        {
          texte: "Les géants et dragons processionnels ont été proclamés chef-d'oeuvre du patrimoine oral et immatériel de l'humanité par l'UNESCO en 2005. Oui, des types en osier ont un titre de l'UNESCO."
        }
      ],
      lien_externe: null,
      morale: {
        titre: "La morale de l’histoire",
        texte: "Les Athois ne périront pas. Cette devise vaut aussi pour les gens qui ont fait 14 stops dans une seule après-midi en risquant la dignité à chacun.",
        question: "Quel est ton décret royal préféré de la journée, et lequel tu abolirais ?"
      },
      gage: {
        texte: "Crie 'Ath' 22 fois à la suite, le plus vite possible, jusqu'à ce que ça donne 'atta atta atta atta'. Dis-le vite plutôt que fort, pour ne pas déranger les habitants."
      }
    }

  ],

  // Écran final : indice affiché après le dernier stop, puis le message de Samy (annexe B)
  final: {
    indice: "Il reste une chose : te ramener chez toi sans que la reine disparaisse en route.",
    titre: "Ma Non 🤍",
    paragraphes: [
      "Tu viens de passer la journée à traverser la Belgique avec moi : des histoires absurdes, des décrets royaux, du jus du trône quand le décret était trop gros. Quelqu'un qui n'a plus de ressources ne fait pas ça. Quelqu'un qui a perdu un peu le moral en route, oui. Et qui sait encore en rire, c'est exactement ce qu'il faut.",
      "Tu me dis que la quarantaine te fait douter. Alors voici le dossier de la défense, stop par stop. Les stops qu'on a passés y sont aussi : même une reine a le droit de zapper.",
      {
        liste: [
          { nom: "L'Atomium", texte: "Prévu pour six mois, toujours debout 68 ans plus tard, sur des béquilles. Un passage à vide, ça finit en attraction touristique." },
          { nom: "La basilique de Koekelberg", texte: "64 ans de chantier, deux guerres, et toujours « encore deux minutes, on arrive ». Le talent, c'est de ne pas abandonner." },
          { nom: "Dilbeek", texte: "Selon la tradition, un empereur a reçu un lapin au lieu d'un lièvre, et tout un village en porte encore le surnom. Une bêtise bien placée, c'est une gloire qui dure." },
          { nom: "Sint-Anna-Pede", texte: "Tout le monde suit le même guide, tout le monde finit dans le même fossé. Regarde où tu mets les pieds." },
          { nom: "Gaasbeek", texte: "Une marquise copie un château français, le déguise en Moyen Âge qui n'a jamais existé, et ça s'appelle du patrimoine. Fake it until it's classé." },
          { nom: "Beersel", texte: "Bruxelles a cassé le château, puis payé la réparation, et ça a fini en usine de coton. Ça arrive à tout le monde." },
          { nom: "Halle", texte: "Selon la légende, la Vierge noire a reçu des boulets de canon en pleine robe, et on lui a construit une basilique. Ce qui t'a blessée peut devenir ce que tu montres avec fierté." },
          { nom: "Lembeek", texte: "Le meilleur travail de la brasserie est fait par des microbes sauvages entrés de nuit par la fenêtre. Parfois, il suffit de laisser la fenêtre ouverte et de patienter." },
          { nom: "Steenkerque", texte: "D'après Voltaire, des soldats surpris en train de s'habiller ont lancé la mode de la cravate. Une erreur portée avec aplomb, ça s'appelle un style." },
          { nom: "Enghien", texte: "Une horloge qui s'arrête 11 heures pour gagner une heure. La logique est dingue, mais elle marche depuis 1865. Si ton emploi du temps a besoin d'une pause, tu sais quoi faire." },
          { nom: "Silly", texte: "Un village qui s'appelle Silly a le revenu moyen le plus élevé du Hainaut. Faire n'importe quoi paie, pas toujours, mais assez souvent pour que ça se tente." },
          { nom: "Ath, l'hôtel de ville", texte: "Une ville entière dépend d'un gamin de 8 ans qui lance une balle dans un trou. On est tous un David à qui on demande trop. Heureusement, il y a la tarte." },
          { nom: "Ath, Saint-Julien", texte: "Goliath, célibataire pendant plus de deux siècles, marié sur décision de la mairie, pantalon brûlé la veille. Si tu te trouves compliquée, il y a pire." },
          { nom: "La tour Burbant", texte: "Debout depuis plus de 850 ans sans une seule séance de coaching." }
        ]
      },
      "Résumé : tu es dans la quarantaine. L'Atomium a 68 ans, des béquilles et 600.000 visiteurs par an. La tour Burbant a plus de 850 ans et personne ne lui a jamais demandé d'arrêter. Tu as le temps d'être aussi indestructible, et tu as de bien meilleures jambes.",
      "Ce que je sais de toi : tu es profondément une bonne personne. Je l'ai su dès le premier soir.",
      "Il y a une histoire que j'aime bien : un ami écrit à un autre \"Tu as huit minutes ?\". Rien de plus. C'est un code entre amis qui veut dire : là, j'ai besoin d'un espace sûr.",
      "Je crois à ça. Huit minutes de l'attention d'un proche, ça suffit pour se rebooster et ne plus se sentir seul. Pas besoin de solution ni de grand discours : juste quelqu'un qui est vraiment là.",
      "Et huit minutes, tout le monde les a. N'importe qui peut quitter un meeting pendant huit minutes, même avec l'agenda le plus chargé du monde. Personne n'est trop occupé pour ça. Si quelqu'un te dit le contraire, c'est que son meeting n'était pas si important.",
      "Alors voilà : j'aurai toujours huit minutes pour toi. Ce soir, demain, ou dans trois ans. Tu m'écris \"Tu as huit minutes ?\", et je quitte ce que je suis en train de faire. Même un meeting. Surtout un meeting.",
      "Les Athois ne périront pas. Toi non plus."
    ],
    signature: "Samy"
  }
};
