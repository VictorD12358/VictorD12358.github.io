/* =========================================================
   TES PROJETS
   Pour ajouter ou modifier un projet, tu changes uniquement cette liste.

   - num      : numéro du projet OpenClassrooms
   - title    : titre affiché sur la carte
   - summary  : une ou deux phrases (textes à remplacer par les tiens)
   - tags     : technologies, à choisir dans la liste FILTERS ci-dessous
   - image    : capture d'écran (idéalement en .webp, moins de 200 Ko)
   - page     : lien vers la page détaillée du projet (laisser "" pour masquer)
   - repo     : lien vers le dépôt GitHub (laisser "" pour masquer)
   ========================================================= */

const PROJECTS = [
    {
        title: "Auditer un projet data avec une IA",
        summary: "Comparaison de deux stratégies de prompt pour auditer un projet d'analyse, puis application des recommandations retenues.",
        tags: ["IA", "Python"],
        image: "images/projets/projet-13.webp",
        page: "",
        repo: ""
    },
    {
        title: "Détection de faux billets",
        summary: "Sélection de variables et comparaison de modèles de classification pour repérer les faux billets.",
        tags: ["Machine learning", "Python"],
        image: "images/projets/projet-12.webp",
        page: "",
        repo: ""
    },
    {
        title: "Étude de marché pour l'export de volaille",
        summary: "Analyse en composantes principales et segmentation de 100 pays pour identifier les marchés cibles.",
        tags: ["Machine learning", "Python"],
        image: "images/projets/projet-11.webp",
        page: "",
        repo: ""
    },
    {
        title: "Analyse d'un corpus de poèmes français",
        summary: "Scraping, traitement du texte et dashboard pour explorer l'évolution de la langue poétique.",
        tags: ["Python", "Power BI"],
        image: "images/projets/projet-10.webp",
        page: "",
        repo: ""
    },
    {
        title: "Analyse des ventes d'une librairie en ligne",
        summary: "Évolution des ventes, profils de clients et tests statistiques avec mesure de la taille d'effet.",
        tags: ["Python"],
        image: "images/projets/projet-9.webp",
        page: "",
        repo: ""
    },
    {
        title: "Profils socio-démographiques des étudiants",
        summary: "Pipeline dbt pour comparer les inscriptions au parcours Data aux données de l'INSEE.",
        tags: ["dbt", "SQL", "Python"],
        image: "images/projets/projet-8.webp",
        page: "",
        repo: ""
    },
    {
        title: "Suivi de l'avancement de projets",
        summary: "Tableau de bord à trois niveaux pour suivre coûts, délais et livrables d'un portefeuille de projets.",
        tags: ["Power BI"],
        image: "images/projets/projet-7.webp",
        page: "",
        repo: ""
    },
    {
        title: "Stock et ventes d'un site de vins et spiritueux",
        summary: "Nettoyage, fusion de trois sources et analyse du chiffre d'affaires, du stock et des marges.",
        tags: ["Python"],
        image: "images/projets/projet-6.webp",
        page: "",
        repo: ""
    },
    {
        title: "Base de données de valeurs foncières",
        summary: "Modélisation relationnelle et douze requêtes SQL pour explorer le marché immobilier de 2020.",
        tags: ["SQL"],
        image: "images/projets/projet-5.webp",
        page: "",
        repo: "https://github.com/VictorD12358/Etude-valeurs-foncieres"
    },
    {
        title: "Étude sur l'alimentation dans le monde",
        summary: "Où se trouve la sous-nutrition en 2017, et que disent les données de la FAO sur ses causes ?",
        tags: ["Python"],
        image: "images/projets/projet-4.webp",
        page: "",
        repo: ""
    },
    {
        title: "Base de données de contrats immobiliers",
        summary: "Création d'une base MySQL à partir de deux fichiers CSV et exploitation par requêtes SQL.",
        tags: ["SQL", "Python"],
        image: "images/projets/projet-3.webp",
        page: "",
        repo: ""
    }
];

/* Boutons de filtre, dans l'ordre d'affichage */
const FILTERS = ["SQL", "Python", "Power BI", "dbt", "Machine learning", "IA"];


/* =========================================================
   CODE DE LA PAGE (pas besoin d'y toucher)
   ========================================================= */

const container = document.getElementById("projects-container");
const filtersBar = document.getElementById("filters");
const counter = document.getElementById("result-count");

let activeFilter = "all";

/* "Power BI" devient "power-bi" : sert de repère dans le HTML et le CSS */
function slugify(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

/* Crée une vignette de secours : numéro du projet sur fond quadrillé */
function makeFallback() {
    const box = document.createElement("div");
    box.className = "thumb-fallback";
    box.setAttribute("aria-hidden", "true");
    return box;
}

function makeMedia(project) {
    const wrapper = project.page
        ? document.createElement("a")
        : document.createElement("div");

    wrapper.className = "project-media";

    if (project.page) {
        wrapper.href = project.page;
        wrapper.setAttribute("aria-label", "Voir le projet : " + project.title);
        wrapper.tabIndex = -1;
    }

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = "Aperçu du projet : " + project.title;
    img.loading = "lazy";
    img.width = 800;
    img.height = 600;

    /* si l'image n'existe pas (encore), on affiche la vignette de secours */
    img.addEventListener("error", () => {
        img.replaceWith(makeFallback());
    });

    wrapper.appendChild(img);
    return wrapper;
}

function makeLink(label, href) {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    if (href.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
    }
    return a;
}

function makeCard(project) {
    const card = document.createElement("article");
    card.className = "project";
    card.dataset.tags = project.tags.map(slugify).join(" ");

    card.appendChild(makeMedia(project));

    const body = document.createElement("div");
    body.className = "project-body";

    const title = document.createElement("h3");
    if (project.page) {
        title.appendChild(makeLink(project.title, project.page));
    } else {
        title.textContent = project.title;
    }
    body.appendChild(title);

    const summary = document.createElement("p");
    summary.className = "project-summary";
    summary.textContent = project.summary;
    body.appendChild(summary);

    const tagList = document.createElement("ul");
    tagList.className = "project-tags";
    tagList.setAttribute("aria-label", "Technologies");
    project.tags.forEach((tag) => {
        const li = document.createElement("li");
        li.dataset.tag = slugify(tag);
        li.textContent = tag;
        tagList.appendChild(li);
    });
    body.appendChild(tagList);

    if (project.page || project.repo) {
        const links = document.createElement("div");
        links.className = "project-links";
        if (project.page) links.appendChild(makeLink("Voir le projet", project.page));
        if (project.repo) links.appendChild(makeLink("GitHub", project.repo));
        body.appendChild(links);
    }

    card.appendChild(body);
    return card;
}

function makeFilterButton(label, value) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-btn";
    btn.textContent = label;
    btn.dataset.filter = value;
    btn.setAttribute("aria-pressed", value === activeFilter ? "true" : "false");
    btn.addEventListener("click", () => applyFilter(value));
    return btn;
}

function applyFilter(value) {
    activeFilter = value;

    filtersBar.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.setAttribute("aria-pressed", btn.dataset.filter === value ? "true" : "false");
    });

    let visible = 0;
    container.querySelectorAll(".project").forEach((card) => {
        const match = value === "all" || card.dataset.tags.split(" ").includes(value);
        const wasHidden = card.hidden;
        card.hidden = !match;
        if (match) {
            visible += 1;
            if (wasHidden) {
                card.classList.remove("is-entering");
                void card.offsetWidth;          /* relance l'animation */
                card.classList.add("is-entering");
            }
        }
    });

    const label = value === "all"
        ? ""
        : " avec " + FILTERS.find((f) => slugify(f) === value);
    counter.textContent = visible + (visible > 1 ? " projets" : " projet") + label;
}

function init() {
    PROJECTS.forEach((project) => container.appendChild(makeCard(project)));

    filtersBar.appendChild(makeFilterButton("Tous", "all"));
    FILTERS.forEach((tech) => filtersBar.appendChild(makeFilterButton(tech, slugify(tech))));

    applyFilter("all");
}

init();
