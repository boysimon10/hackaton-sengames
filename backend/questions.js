const questions = [
  {
    id: 1,
    category: "histoire",
    question: "Quelle année le Sénégal a-t-il obtenu son indépendance de la France ?",
    options: ["1958", "1960", "1962", "1964"],
    answer: "1960"
  },
  {
    id: 2,
    category: "histoire",
    question: "Qui était le premier président du Sénégal après l'indépendance ?",
    options: ["Léopold Sédar Senghor", "Abdou Diouf", "Macky Sall", "Abdoulaye Wade"],
    answer: "Léopold Sédar Senghor"
  },
  {
    id: 3,
    category: "geographie",
    question: "Quelle est la capitale du Sénégal ?",
    options: ["Dakar", "Saint-Louis", "Thiès", "Ziguinchor"],
    answer: "Dakar"
  },
  {
    id: 4,
    category: "geographie",
    question: "Quelle est la principale ressource économique du Sénégal ?",
    options: ["Pétrole", "Or", "Arachides", "Diamants"],
    answer: "Arachides"
  },
  {
    id: 5,
    category: "mathematiques",
    question: "Si x = 3 et y = 5, quelle est la valeur de x + y ?",
    options: ["5", "8", "10", "15"],
    answer: "8"
  },
  {
    id: 6,
    category: "mathematiques",
    question: "Combien font 6 x 8 ?",
    options: ["24", "40", "48", "56"],
    answer: "48"
  },
  {
    id: 7,
    category: "education_civique",
    question: "Quelle est la devise du Sénégal ?",
    options: ["Un peuple, un but, une foi", "Liberté, égalité, fraternité", "Unité, travail, progrès", "Paix, justice, solidarité"],
    answer: "Un peuple, un but, une foi"
  },
  {
    id: 8,
    category: "education_civique",
    question: "Quel est le rôle du président du Sénégal ?",
    options: ["Chef de l'État et chef du gouvernement", "Chef de l'État uniquement", "Chef du gouvernement uniquement", "Représentant de l'ONU"],
    answer: "Chef de l'État et chef du gouvernement"
  },
  {
    id: 9,
    category: "histoire",
    question: "Qui a été le premier président du Sénégal après l'indépendance ?",
    options: ["Léopold Sédar Senghor", "Abdou Diouf", "Macky Sall", "Abdoulaye Wade"],
    answer: "Léopold Sédar Senghor"
  },
  {
    id: 10,
    category: "histoire",
    question: "Quel roi du Sénégal a résisté à la colonisation française au 19ème siècle ?",
    options: ["Lat Dior", "Cheikh Anta Diop", "El Hadj Omar Tall", "Sunu Gaal"],
    answer: "Lat Dior"
  },
  {
    id: 11,
    category: "geographie",
    question: "Quel est le plus grand fleuve qui traverse le Sénégal ?",
    options: ["Fleuve Sénégal", "Fleuve Gambie", "Fleuve Niger", "Fleuve Casamance"],
    answer: "Fleuve Sénégal"
  },
  {
    id: 12,
    category: "geographie",
    question: "Quel est le nom du parc national célèbre au Sénégal pour sa faune variée ?",
    options: ["Parc national de la Langue de Barbarie", "Parc national du Niokolo-Koba", "Parc national de Basse Casamance", "Parc national des oiseaux du Djoudj"],
    answer: "Parc national du Niokolo-Koba"
  },
  {
    id: 13,
    category: "mathematiques",
    question: "Quel est le résultat de 15 - 7 ?",
    options: ["6", "7", "8", "9"],
    answer: "8"
  },
  {
    id: 14,
    category: "mathematiques",
    question: "Quelle est la racine carrée de 81 ?",
    options: ["7", "8", "9", "10"],
    answer: "9"
  },
  {
    id: 15,
    category: "education_civique",
    question: "Quelle est la signification des couleurs du drapeau du Sénégal ?",
    options: ["Vert : espoir, Jaune : richesse, Rouge : courage", "Vert : espoir, Jaune : soleil, Rouge : sacrifice", "Vert : agriculture, Jaune : richesse minérale, Rouge : sang versé pour l'indépendance", "Vert : forêts, Jaune : désert, Rouge : lutte pour l'indépendance"],
    answer: "Vert : espoir, Jaune : richesse, Rouge : courage"
  },
  {
    id: 16,
    category: "education_civique",
    question: "Quel est le symbole de l'unité nationale au Sénégal ?",
    options: ["L'arbre de la liberté", "Le lion", "Le baobab", "L'étoile verte"],
    answer: "Le baobab"
  },
  {
    id: 17,
    category: "histoire",
    question: "Quelle était la colonie française qui a fusionné avec le Sénégal pour former la Fédération du Mali en 1959 ?",
    options: ["Guinée", "Mauritanie", "Soudan français", "Côte d'Ivoire"],
    answer: "Soudan français"
  },
  {
    id: 18,
    category: "histoire",
    question: "Quel est le nom du mouvement culturel et politique au Sénégal qui prônait un retour aux valeurs africaines et à la culture traditionnelle ?",
    options: ["Négritude", "Panaf", "Afrocentrisme", "Senghorisme"],
    answer: "Négritude"
  },
  {
    id: 19,
    category: "geographie",
    question: "Quelle est la langue la plus parlée au Sénégal en dehors du français ?",
    options: ["Wolof", "Peul", "Sérère", "Mandinka"],
    answer: "Wolof"
  },
  {
    id: 20,
    category: "geographie",
    question: "Quel est le nom de la plus grande ville du Sénégal après Dakar ?",
    options: ["Thiès", "Touba", "Mbour", "Kaolack"],
    answer: "Touba"
  },
  {
    id: 21,
    category: "mathematiques",
    question: "Combien font 12 ÷ 3 ?",
    options: ["3", "4", "6", "8"],
    answer: "4"
  },
  {
    id: 22,
    category: "mathematiques",
    question: "Si x = 4 et y = 7, quelle est la valeur de x * y ?",
    options: ["11", "24", "28", "32"],
    answer: "28"
  },
  {
    id: 23,
    category: "education_civique",
    question: "Quel est le système politique du Sénégal ?",
    options: ["République présidentielle", "Monarchie constitutionnelle", "Régime parlementaire", "Dictature"],
    answer: "République présidentielle"
  },
  {
    id: 24,
    category: "education_civique",
    question: "Quel est le nom de la première constitution du Sénégal adoptée en 1963 ?",
    options: ["Constitution de 1959", "Constitution de 1960", "Constitution de 1963", "Constitution de 1968"],
    answer: "Constitution de 1963"
  },
  {
    id: 25,
    category: "histoire",
    question: "Quel était le nom du Sénégal sous la colonisation française ?",
    options: ["Afrique-Occidentale française (AOF)", "Afrique-Équatoriale française (AEF)", "Soudan français", "Guinée française"],
    answer: "Afrique-Occidentale française (AOF)"
  },
  {
    id: 26,
    category: "histoire",
    question: "Quel événement historique s'est déroulé sur l'île de Gorée au Sénégal ?",
    options: ["Déclaration d'indépendance du Sénégal", "Conférence de Bandung", "Début de la traite négrière", "Première réunion de l'Organisation de l'unité africaine (OUA)"],
    answer: "Début de la traite négrière"
  },
  {
    id: 27,
    category: "geographie",
    question: "Quel est le nom du plus grand lac naturel du Sénégal ?",
    options: ["Lac de Mekhe", "Lac Rose", "Lac de Guiers", "Lac de Guires"],
    answer: "Lac de Guiers"
  },
  {
    id: 28,
    category: "geographie",
    question: "Quelle est la région la plus peuplée du Sénégal ?",
    options: ["Dakar", "Thiès", "Diourbel", "Tambacounda"],
    answer: "Dakar"
  },
  {
    id: 29,
    category: "mathematiques",
    question: "Combien font 3 x 3 ?",
    options: ["6", "7", "9", "12"],
    answer: "9"
  },
  {
    id: 30,
    category: "mathematiques",
    question: "Si x = 6 et y = 2, quelle est la valeur de x - y ?",
    options: ["2", "3", "4", "5"],
    answer: "4"
  },
];

module.exports = questions;
