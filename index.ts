import bins from "./data/bins"
import banks from "./data/banks"

interface IBank {
    [key: string]: {
        bankAlias: string[],
        bankName: string,
        bankLocalName: string,
        bankColor: string,
        bankColors: string[],
        bankCountry: string,
        bankSite: string,
        bankPhone: string,
        formBackgroundColor: string,
        formBackgroundColors: string[],
        formBackgroundLightness: string,
        formTextColor: string,
        formLogoScheme: string,
        formBorderColor: string
    }
}

function nameBank(bin: string): string | undefined {
    const keyBank = bins?.[bin];
    return banks?.[keyBank]?.bankName;
}

function bank(bin: string): IBank | undefined {
    const keyBank = bins?.[bin];
    return banks?.[keyBank];
}

export default {
    nameBank,
    bank,
}
