
const PROJECTS = [
{
title: "Auditer un projet data avec une IA",
summary: "Comparaison de deux stratégies de prompt pour auditer un projet d'analyse, puis application des recommandations retenues.",
description: "Comparaison de deux stratégies de prompt engineering pour auditer et améliorer un projet d'analyse des ventes e-commerce. Évaluation critique des recommandations de l'IA, vérification à l'aide de sources statistiques et techniques, puis application des améliorations retenues dans un notebook Python.",
tags: ["IA", "Python"],
image: "images/projet-13.png",
page: "",
repo: "https://github.com/VictorD12358/Auditer-un-projet-data-avec-une-IA"
},
{
title: "Détection de faux billets",
summary: "Sélection de variables et comparaison de modèles de classification pour repérer les faux billets.",
description: "Développement et comparaison de modèles de machine learning pour distinguer les vrais billets des faux à partir de six mesures géométriques. Création d'une méthode de sélection de variables fondée sur le coefficient de recouvrement (OVL), comparaison de cinq approches de classification et déploiement de pipelines reproductibles.",
tags: ["Machine learning", "Python"],
image: "images/projet-12.png",
page: "",
repo: "https://github.com/VictorD12358/Detection-de-faux-billets"
},
{
title: "Étude de marché pour l'export de volaille",
summary: "Analyse en composantes principales et segmentation de 100 pays pour identifier les marchés cibles.",
description: "Sélection de marchés d'exportation pour l'entreprise fictive « La Poule qui Chante », à partir d'une analyse PESTEL, d'une analyse en composantes principales (ACP) et d'une segmentation de 100 pays. Construction d'indicateurs d'opportunité et comparaison de méthodes de clustering pour identifier les marchés les plus prometteurs.",
tags: ["Machine learning", "Python"],
image: "images/projet-11.png",
page: "",
repo: "https://github.com/VictorD12358/Etude-de-marche-identifier-les-pays-cibles-pour-l-export-de-volaille"
},
{
title: "Analyse d'un corpus de poèmes français",
summary: "Scraping, traitement du texte et dashboard pour explorer l'évolution de la langue poétique.",
description: "Collecte par web scraping de près de 3 200 poèmes français, traitement automatique du langage (lemmatisation et analyse syntaxique) et création d'un dashboard Power BI pour explorer l'évolution de la langue poétique de 1660 à nos jours.",
tags: ["Python", "Power BI"],
image: "images/projet-10.png",
page: "",
repo: "https://github.com/VictorD12358/Poetica"
},
{
title: "Analyse des ventes d'une librairie en ligne",
summary: "Évolution des ventes, profils de clients et tests statistiques avec mesure de la taille d'effet.",
description: "Analyse des performances commerciales, du comportement des clients et des produits d'une librairie en ligne. Étude des tendances temporelles, de la concentration du chiffre d'affaires et des relations entre âge, fréquence d'achat et panier moyen, avec des tests statistiques et des mesures de taille d'effet.",
tags: ["Python"],
image: "images/projet-9.png",
page: "",
repo: "https://github.com/VictorD12358/Analyse-des-ventes-d-une-librairie"
},
{
title: "Profils socio-démographiques des étudiants",
summary: "Pipeline dbt pour comparer les inscriptions au parcours Data aux données de l'INSEE.",
description: "Mise en place d'un pipeline de transformation de données avec dbt pour comparer les inscriptions au parcours Data aux données socio-démographiques de l'INSEE.",
tags: ["dbt", "SQL", "Python"],
image: "images/projet-8.png",
page: "",
repo: ""
},
{
title: "Suivi de l'avancement de projets",
summary: "Tableau de bord à trois niveaux pour suivre coûts, délais et livrables d'un portefeuille de projets.",
description: "Conception d'un tableau de bord Power BI interactif à trois niveaux (groupe, région, pays) pour suivre 104 projets IT et Marketing dans 52 pays. Identification des dérives de coûts, de délais et de livrables grâce à des indicateurs DAX et des alertes à partir d'un seuil de 15 %.",
tags: ["Power BI"],
image: "images/projet-7.png",
page: "",
repo: "https://github.com/VictorD12358/Suivi-de-l-avancement-de-projets"
},
{
title: "Stock et ventes d'un site de vins et spiritueux",
summary: "Nettoyage, fusion de trois sources et analyse du chiffre d'affaires, du stock et des marges.",
description: "Nettoyage et fusion de trois sources de données pour analyser le chiffre d'affaires, les ventes, les stocks et les marges du site BottleNeck. Identification des produits les plus rentables, des valeurs aberrantes et des pistes d'amélioration du catalogue.",
tags: ["Python"],
image: "images/projet-6.png",
page: "",
repo: "https://github.com/VictorD12358/Analyse-du-stock-et-des-ventes-d-un-site-e-commerce-de-vins-et-spiritueux"
},
{
title: "Base de données de valeurs foncières",
summary: "Modélisation relationnelle et douze requêtes SQL pour explorer le marché immobilier de 2020.",
description: "Conception et modélisation d'une base de données relationnelle MySQL à partir de trois sources open data : transactions immobilières (DVF), données de population de l'INSEE et référentiel géographique. Exploitation de la base par 12 requêtes SQL pour analyser le marché immobilier français au premier semestre 2020, avec jointures, agrégations, CTE et fonctions de fenêtrage.",
tags: ["SQL"],
image: "images/projet-5.png",
page: "",
repo: "https://github.com/VictorD12358/Etude-valeurs-foncieres"
},
{
title: "Étude sur l'alimentation dans le monde",
summary: "Où se trouve la sous-nutrition en 2017, et que disent les données de la FAO sur ses causes ?",
description: "Analyse de la sous-nutrition mondiale en 2017 à partir de données de la FAO et de l'EFSA, avec exploration, visualisation et analyses complémentaires en Python.",
tags: ["Python"],
image: "images/projet-4.png",
page: "",
repo: "https://github.com/VictorD12358/Etude-sur-l-alimentation-dans-le-monde"
},
{
title: "Base de données de contrats immobiliers",
summary: "Création d'une base MySQL à partir de deux fichiers CSV et exploitation par requêtes SQL.",
description: "Conception d'une base de données relationnelle MySQL à partir de données immobilières. Import et traitement des données avec Python, modélisation du schéma relationnel et analyses SQL.",
tags: ["SQL", "Python"],
image: "images/projet-3.png",
page: "",
repo: "https://github.com/VictorD12358/Base-de-donnees-contrats-immobiliers"
}
];

/* Boutons de filtre, dans l'ordre d'affichage */
const FILTERS = ["SQL", "Python", "Power BI", "dbt", "Machine learning", "IA"];


/* =========================================================
   CODE DE LA PAGE 
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

   const description = document.createElement("p");
   description.className = "project-description";
   description.textContent = project.description;
   body.appendChild(description);

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
