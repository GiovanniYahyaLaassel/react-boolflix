export function getFlag(languageCode) {
    const flags = {
        en: '🇺🇸', // Inglese - USA
        it: '🇮🇹', // Italiano - Italia
        fr: '🇫🇷', // Francese - Francia
        es: '🇪🇸', // Spagnolo - Spagna
        de: '🇩🇪', // Tedesco - Germania
        ja: '🇯🇵', // Giapponese - Giappone
        zh: '🇨🇳', // Cinese - Cina
    };

    // Restituisce la bandiera corrispondente o un punto interrogativo per lingue sconosciute
    return flags[languageCode] || '? ';
}