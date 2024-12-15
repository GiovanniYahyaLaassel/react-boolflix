export function getFlagUrl(languageCode) {
    const codeMapping = {
        en: 'us', 
        it: 'it', 
        fr: 'fr', 
        es: 'es', 
        de: 'de', 
    };

    const fallbackFlag = 'https://flagcdn.com/w320/xx.png'; 

    const countryCode = codeMapping[languageCode]; // Mappa il codice della lingua a un codice paese

    if (countryCode) {
        return `https://flagcdn.com/w320/${countryCode}.png`; // URL bandiera basata sul codice
    }

    return fallbackFlag; // Se non trovo, restituisce il fallback
}