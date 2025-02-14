import bins from "./data/bins"
import banks from "./data/banks"

interface IBank {
    [key: string]: {
        bankAlias: ['ae-adcb', 'ADCB', 'adcb.com'],
        bankName: 'ADCB',
        bankLocalName: 'ADCB',
        bankColor: '#cd2026',
        bankColors: ['#273239'],
        bankCountry: 'ae',
        bankSite: 'https://www.adcb.com/en/about-us/',
        bankPhone: '+9712 6962222',
        formBackgroundColor: '#cd2026',
        formBackgroundColors: ['#cd2026', '#f3030d'],
        formBackgroundLightness: 'dark',
        formTextColor: '#ffffff',
        formLogoScheme: 'inverted',
        formBorderColor: "#ffffff"
    }
}

function nameBank(bin: string): string | undefined {
    return bins?.[bin];
}

function bank(bin: string): IBank | undefined {
    const nameBank = bins?.[bin];
    return banks?.[nameBank];
}

export default {
    nameBank,
    bank,
}
