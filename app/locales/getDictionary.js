import fr from './fr.json';
import it from './it.json';

const translations = {
    fr,
    it
};

export function getDictionary(locale) {
    return translations[locale] || translations["fr"];
};