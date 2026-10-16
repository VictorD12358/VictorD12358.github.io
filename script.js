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
    }
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
