const GITHUB_USERNAME = "VictorD12358";

const PROJECTS = [
    {
        repo: "Base-de-donnees-contrats-immobiliers",
        title: "Base de données contrats immobiliers",
        description: "Conception d'une base de données relationnelle MySQL à partir de données immobilières. Import et traitement des données avec Python, modélisation du schéma relationnel et analyses SQL.",
        language: "SQL · Python",
        results: [
            "30 335 contrats analysés",
            "38 919 communes",
            "Analyse des cotisations et des surfaces"
        ]
    },
    {
        repo: "Etude-sur-l-alimentation-dans-le-monde",
        title: "Étude sur l'alimentation dans le monde",
        description: "Analyse de la sous-nutrition mondiale en 2017 à partir de données de la FAO et de l'EFSA, avec exploration, visualisation et analyses complémentaires en Python.",
        language: "Python · Jupyter · Data Visualisation",
        results: [
            "535,7 millions de personnes sous-nourries",
            "7,1 % de la population mondiale",
            "8,77 milliards d'adultes nourrissables théoriquement",
            "Analyse des causes : accès, redistribution et utilisation des ressources"
        ]
    },
    {
        repo: "Analyse-du-stock-et-des-ventes-d-un-site-e-commerce-de-vins-et-spiritueux",
        title: "Analyse du stock et des ventes d'un site e-commerce",
        description: "Nettoyage et fusion de trois sources de données pour analyser le chiffre d'affaires, les ventes, les stocks et les marges du site BottleNeck. Identification des produits les plus rentables, des valeurs aberrantes et des pistes d'amélioration du catalogue.",
        language: "Python · Jupyter · Data Analysis",
        results: [
            "153 700 € de chiffre d'affaires analysé",
            "714 produits analysés sur 825",
            "4,6 % des articles génèrent 80 % du chiffre d'affaires",
            "495 000 € de stock valorisé",
            "35 % de taux de marge moyen"
        ]
    },
    {
        repo: "Analyse-des-ventes-d-une-librairie",
        title: "Analyse des ventes d'une librairie en ligne",
        description: "Analyse des performances commerciales, du comportement des clients et des produits d'une librairie en ligne. Étude des tendances temporelles, de la concentration du chiffre d'affaires et des relations entre âge, fréquence d'achat et panier moyen, avec des tests statistiques et des mesures de taille d'effet.",
        language: "Python · Jupyter · Statistiques",
        results: [
            "687 534 lignes de transaction analysées",
            "Les 4 plus gros clients représentent 7,4 % du chiffre d'affaires",
            "Corrélation âge / fréquence d'achat : ρ = +0,21",
            "Corrélation âge / panier moyen : ρ = −0,33",
            "Analyse statistique des comportements d'achat et des produits"
        ]
    },
    {
        repo: "Poetica",
        title: "Analyse d'un corpus de poèmes français",
        description: "Collecte par web scraping de près de 3 200 poèmes français, traitement automatique du langage (lemmatisation et analyse syntaxique) et création d'un dashboard Power BI pour explorer l'évolution de la langue poétique de 1660 à nos jours.",
        language: "Python · Web scraping · NLP · Power BI · Formation",
        results: [
            "3 180 poèmes collectés auprès de 118 auteurs",
            "Corpus final : 2 885 poèmes et 97 auteurs",
            "10 périodes littéraires analysées, du Classicisme au Contemporain",
            "Indice de diversité lexicale et score d'originalité syntaxique développés en DAX",
            "Analyse de la loi de Heaps/Herdan et de l'influence de la longueur des textes"
        ]
    },
    {
        repo: "Etude-de-marche-identifier-les-pays-cibles-pour-l-export-de-volaille",
        title: "Étude de marché : identifier les pays cibles pour l'export de volaille",
        description: "Sélection de marchés d'exportation pour l'entreprise fictive « La Poule qui Chante », à partir d'une analyse PESTEL, d'une analyse en composantes principales (ACP) et d'une segmentation de 100 pays. Construction d'indicateurs d'opportunité et comparaison de méthodes de clustering pour identifier les marchés les plus prometteurs.",
        language: "Python · ACP · Clustering · Formation",
        results: [
            "100 pays étudiés et 26 marchés cibles identifiés",
            "10 pays prioritaires disposant d'un accord commercial en vigueur avec l'UE",
            "ACP : 4 axes conservés pour expliquer 80 % de la variance",
            "Segmentation en 4 clusters : CAH de Ward et K-moyennes comparées",
            "Score d'opportunité nette créé : PC4 − PC3"
        ]
    },
    {
        repo: "Detection-de-faux-billets",
        title: "Détection de faux billets",
        description: "Développement et comparaison de modèles de machine learning pour distinguer les vrais billets des faux à partir de six mesures géométriques. Création d'une méthode de sélection de variables fondée sur le coefficient de recouvrement (OVL), comparaison de cinq approches de classification et déploiement de pipelines reproductibles.",
        language: "Python · scikit-learn · Machine learning · Formation",
        results: [
            "1 463 billets complets analysés",
            "Jusqu'à 99,2 % d'accuracy avec la régression logistique",
            "98,8 % des faux billets détectés par le modèle KDE final",
            "Sélection de variables à partir du recouvrement des distributions (OVL)",
            "Pipelines sauvegardés avec Joblib pour prédire sur de nouveaux billets"
        ]
    },
    {
    repo: "Suivi-de-l-avancement-de-projets",
    title: "Suivi de l'avancement de projets",
    description: "Conception d'un tableau de bord Power BI interactif à trois niveaux (groupe, région, pays) pour suivre 104 projets IT et Marketing dans 52 pays. Identification des dérives de coûts, de délais et de livrables grâce à des indicateurs DAX et des alertes à partir d'un seuil de 15 %.",
    language: "Power BI · DAX · Power Query · Formation",
    results: [
        "104 projets suivis dans 52 pays",
        "32 projets en alerte, soit 31 % du portefeuille",
        "60,2 M€ de coûts réels contre 56,1 M€ prévus (+7,3 %)",
        "Analyse des dérives par région, pays, type de projet et phase",
        "Dashboard interactif avec Gantt et navigation à trois niveaux"
    ]
},
{
    repo: "Auditer-un-projet-data-avec-une-IA",
    title: "Audit d'un projet Data avec une IA générative",
    description: "Comparaison de deux stratégies de prompt engineering pour auditer et améliorer un projet d'analyse des ventes e-commerce. Évaluation critique des recommandations de l'IA, vérification à l'aide de sources statistiques et techniques, puis application des améliorations retenues dans un notebook Python.",
    language: "Python · Prompt Engineering · Statistiques · IA générative · Formation",
    results: [
        "2 stratégies de prompting comparées sur un même modèle d'IA",
        "9 points convergents identifiés entre les deux approches",
        "6 problèmes factuels supplémentaires détectés par le prompt structuré",
        "Corrélations de Spearman : prix / prix d'achat (ρ = +0,99), prix / stock (ρ = −0,57), prix / ventes (ρ = −0,69)",
        "Test de Kruskal-Wallis sur les marges par type de produit : H = 152,8 ; p < 10⁻²⁹",
        "Améliorations appliquées : score MAD, diagramme de Pareto et documentation d'une anomalie de marge",
        "Recommandations écartées lorsque le gain attendu ne justifiait pas la complexité"
    ]
},
{
    repo: "Etude-valeurs-foncieres",
    title: "Étude des valeurs foncières",
    description: "Conception et modélisation d'une base de données relationnelle MySQL à partir de trois sources open data : transactions immobilières (DVF), données de population de l'INSEE et référentiel géographique. Exploitation de la base par 12 requêtes SQL pour analyser le marché immobilier français au premier semestre 2020, avec jointures, agrégations, CTE et fonctions de fenêtrage.",
    language: "SQL · MySQL · Modélisation · Open Data · Formation",
    results: [
        "34 169 ventes immobilières intégrées à la base de données",
        "31 378 appartements vendus au premier semestre 2020",
        "46 % des ventes d'appartements recensées en Île-de-France (14 465 ventes)",
        "Prix moyen au m² à Paris : environ 12 100 €",
        "Hausse de 3,7 % du nombre de ventes entre les deux premiers trimestres de 2020",
        "Prix moyen au m² des 2 pièces supérieur d'environ 11 % à celui des 3 pièces",
        "Classement des 3 communes les plus chères dans 5 départements avec ROW_NUMBER()",
        "Croisement des transactions et des données de population pour mesurer les ventes pour 1 000 habitants",
        "Modélisation relationnelle, contraintes d'intégrité et dictionnaire de données"
    ]
}
];
const projectsContainer = document.getElementById("projects-container");

function loadProjects() {
    projectsContainer.innerHTML = "";

    PROJECTS.forEach(project => {
        const card = document.createElement("article");

        card.className = "project-card";

        const githubUrl =
            `https://github.com/${GITHUB_USERNAME}/${project.repo}`;

        let resultsHTML = "";

        if (project.results) {
            resultsHTML = `
                <ul class="project-results">
                    ${project.results
                        .map(result => `<li>${result}</li>`)
                        .join("")}
                </ul>
            `;
        }

        card.innerHTML = `
            <div>
                <h3>${project.title}</h3>

                <p>${project.description}</p>

                ${resultsHTML}
            </div>

            <div class="project-card-footer">
                <span class="project-language">
                    ${project.language}
                </span>

                <div class="project-links">
                    <a
                        href="${githubUrl}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub ↗
                    </a>
                </div>
            </div>
        `;

        projectsContainer.appendChild(card);
    });
}

loadProjects();
