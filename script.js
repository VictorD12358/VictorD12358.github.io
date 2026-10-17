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
