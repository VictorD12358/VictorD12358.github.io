const GITHUB_USERNAME = "VictorD12358";
const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`;

const projectsContainer = document.getElementById("projects-container");


async function loadProjects() {

    try {

        projectsContainer.innerHTML = `
            <p>Chargement des projets...</p>
        `;

        const response = await fetch(GITHUB_API);

        if (!response.ok) {
            throw new Error("Impossible de récupérer les projets GitHub.");
        }

        const repositories = await response.json();


        // On garde uniquement les dépôts :
        // - qui ne sont pas des forks
        // - qui ne sont pas archivés
        // - qui possèdent le topic "portfolio"

        const projects = repositories.filter(repo =>
            !repo.fork &&
            !repo.archived &&
            repo.topics.includes("portfolio")
        );


        // Si aucun projet n'est trouvé

        if (projects.length === 0) {

            projectsContainer.innerHTML = `
                <p>
                    Aucun projet avec le topic "portfolio" n'a été trouvé.
                </p>
            `;

            return;
        }


        // Création des cartes

        projectsContainer.innerHTML = "";

        projects.forEach(repo => {

            const card = document.createElement("article");

            card.className = "project-card";


            const demoLink = repo.homepage
                ? `
                    <a
                        href="${repo.homepage}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Démo ↗
                    </a>
                `
                : "";


            const language = repo.language
                ? repo.language
                : "Projet";


            card.innerHTML = `

                <div>

                    <h3>
                        ${repo.name}
                    </h3>

                    <p>
                        ${repo.description || "Aucune description disponible."}
                    </p>

                </div>


                <div class="project-card-footer">

                    <span class="project-language">
                        ${language}
                    </span>


                    <div class="project-links">

                        <a
                            href="${repo.html_url}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub ↗
                        </a>

                        ${demoLink}

                    </div>

                </div>

            `;


            projectsContainer.appendChild(card);

        });

    }


    catch (error) {

        console.error(error);

        projectsContainer.innerHTML = `
            <p>
                Impossible de charger les projets GitHub pour le moment.
            </p>
        `;

    }

}


// Lancement

loadProjects();
