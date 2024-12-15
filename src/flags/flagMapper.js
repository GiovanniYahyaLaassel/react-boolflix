export function getFlagUrl(languageCode) {
    const supportedCodes = ['en', 'it', 'fr', 'es', 'de', 'ja', 'zh']; // Elenco da FlagCDN per i codici
    const fallbackFlag = 'https://flagcdn.com/w320/xx.png'; // Bandiere

    if (supportedCodes.includes(languageCode)) {
        return `https://flagcdn.com/w320/${languageCode}.png`; // URL bandiera basata sul codice
    }

    return fallbackFlag;
}