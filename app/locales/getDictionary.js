import fr from './fr.json';
import it from './it.json';
import en from './en.json';

const translations = {
    fr,
    it,
    en
};

export function getDictionary(locale) {
    return translations[locale] || translations["fr"];
};