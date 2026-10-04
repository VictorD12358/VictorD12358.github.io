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
        description: "Analyse de données internationales sur l'alimentation et la disponibilité alimentaire.",
        language: "Python · Data Analysis"
    },
    {
        repo: "Analyse-du-stock-et-des-ventes-d-un-site-e-commerce-de-vins-et-spiritueux",
        title: "Analyse du stock et des ventes d'un site e-commerce",
        description: "Analyse des stocks, des ventes et des performances commerciales d'un site e-commerce.",
        language: "Python · Data Analysis"
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
