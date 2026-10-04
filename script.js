const projectsContainer = document.getElementById("projects-container");

projectsContainer.innerHTML = `
    <article class="project-card">
        <div>
            <h3>Base de données contrats immobiliers</h3>
            <p>
                Conception d'une base de données relationnelle MySQL,
                import des données avec Python et analyses SQL.
            </p>

            <ul class="project-results">
                <li>30 335 contrats analysés</li>
                <li>38 919 communes</li>
                <li>Analyse des cotisations et des surfaces</li>
            </ul>
        </div>

        <div class="project-card-footer">
            <span class="project-language">
                SQL · Python
            </span>

            <div class="project-links">
                <a
                    href="https://github.com/VictorD12358/Base-de-donnees-contrats-immobiliers"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub ↗
                </a>
            </div>
        </div>
    </article>
`;
