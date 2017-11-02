export const COMPTE_ADMINISTRATIF = 'COMPTE_ADMINISTRATIF';

export const AGGREGATED_ATEMPORAL = "AGGREGATED_ATEMPORAL";
export const AGGREGATED_TEMPORAL = "AGGREGATED_TEMPORAL";
export const M52_FONCTION_ATEMPORAL = "M52_FONCTION_ATEMPORAL";
export const M52_FONCTION_TEMPORAL = "M52_FONCTION_TEMPORAL";

export const CORRECTIONS_AGGREGATED = "CORRECTIONS_AGGREGATED";

export const INSERTION_PICTO = "INSERTION_PICTO";
export const COLLEGE_PICTO = "COLLEGE_PICTO";
export const ENFANCE_PICTO = "ENFANCE_PICTO";
export const ENVIRONNEMENT_AMENAGEMENT_PICTO = "ENVIRONNEMENT_AMENAGEMENT_PICTO";
export const HANDICAPES_PICTO = "HANDICAPES_PICTO";
export const PATRIMOINE_PICTO = "PATRIMOINE_PICTO";
export const ROUTES_PICTO = "ROUTES_PICTO";
export const SOUTIEN_COMMUNES_PICTO = "SOUTIEN_COMMUNES_PICTO";
export const PERSONNES_AGEES_PICTO = "PERSONNES_AGEES_PICTO";
export const BONHOMME_PICTO = "BONHOMME_PICTO";

export const AGENTS_PICTO = 'AGENTS_PICTO';
export const CARBURANT_PICTO = 'CARBURANT_PICTO';
export const ELECTRICITE_PICTO = 'ELECTRICITE_PICTO';

export const CARTE_PRESENCE_HTML = "CARTE_PRESENCE_HTML";

const env = process.env.NODE_ENV;

const GIRONDE_FR_DRUPAL_MEDIA_ID = process.env.GIRONDE_FR_DRUPAL_MEDIA_ID;

const prodYearToVariablePart = {
    2016: '0',
    2015: '1',
    2014: '2',
    2013: '3',
    2012: '4',
    // 2017: '???'
};

export const urls = {
    // finance data
    [COMPTE_ADMINISTRATIF]: {
        "production": (year => `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/${prodYearToVariablePart[year]}`),
        "demo": (year => `../data/finances/cedi_${year}_CA.csv`),
        get development(){return this.demo}
    }[env],
    [CORRECTIONS_AGGREGATED]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/21`,
        "demo": `../data/finances/corrections-agregation.csv`,
        get development(){return this.demo}
    }[env],

    // texts
    [AGGREGATED_ATEMPORAL]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/18`,
        "demo": `../data/texts/aggregated-atemporal.csv`,
        get development(){return this.demo}
    }[env],
    [AGGREGATED_TEMPORAL]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/19`,
        "demo": `../data/texts/aggregated-temporal.csv`,
        get development(){return this.demo}
    }[env],

    // HTML Carte présence
    [CARTE_PRESENCE_HTML]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/22`,
        "demo": `../public/carte-presence.html`,
        get development(){return this.demo}
    }[env],

    // pictos
    [INSERTION_PICTO]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/8`,
        "demo": 'https://cdn.rawgit.com/datalocale/pictoGironde/master/Insertion.svg',
        get development(){return this.demo}
    }[env],
    [COLLEGE_PICTO]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/9`,
        "demo": 'https://rawgit.com/datalocale/pictoGironde/master/Colleges.svg',
        get development(){return this.demo}
    }[env],
    [ENFANCE_PICTO]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/10`,
        "demo": 'https://rawgit.com/datalocale/pictoGironde/master/Enfance.svg',
        get development(){return this.demo}
    }[env],
    [ENVIRONNEMENT_AMENAGEMENT_PICTO]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/11`,
        "demo": 'https://rawgit.com/datalocale/pictoGironde/master/EnvironnementAmenagement.svg',
        get development(){return this.demo}
    }[env],
    [HANDICAPES_PICTO]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/12`,
        "demo": 'https://rawgit.com/datalocale/pictoGironde/master/Handicapes.svg',
        get development(){return this.demo}
    }[env],
    [PATRIMOINE_PICTO]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/13`,
        "demo": 'https://rawgit.com/datalocale/pictoGironde/master/Patrimoine.svg',
        get development(){return this.demo}
    }[env],
    [ROUTES_PICTO]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/14`,
        "demo": 'https://rawgit.com/datalocale/pictoGironde/master/routes.svg',
        get development(){return this.demo}
    }[env],
    [SOUTIEN_COMMUNES_PICTO]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/15`,
        "demo": 'https://rawgit.com/datalocale/pictoGironde/master/SoutienCommunes.svg',
        get development(){return this.demo}
    }[env],
    [PERSONNES_AGEES_PICTO]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/16`,
        "demo": 'https://rawgit.com/datalocale/pictoGironde/master/Personnesagees.svg',
        get development(){return this.demo}
    }[env],

    [AGENTS_PICTO]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/23`,
        "demo": 'https://rawgit.com/datalocale/pictoGironde/master/AgentesDepartement.svg',
        get development(){return this.demo}
    }[env],
    [CARBURANT_PICTO]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/24`,
        "demo": 'https://rawgit.com/datalocale/pictoGironde/master/Carburant.svg',
        get development(){return this.demo}
    }[env],
    [ELECTRICITE_PICTO]: {
        "production": `/media/${GIRONDE_FR_DRUPAL_MEDIA_ID}/field_dataviz_files/25`,
        "demo": 'https://rawgit.com/datalocale/pictoGironde/master/depensesElectricite.svg',
        get development(){return this.demo}
    }[env]
}
