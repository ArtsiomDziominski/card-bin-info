import { bins } from "./data/bins"
import { banks } from "./data/banks"

function nameBank(bin: string): any {
    return bins?.[bin];
}

function bank(bin: string): string | undefined {
    const nameBank = bins?.[bin];
    return banks?.[nameBank];
}

export default {
    nameBank,
    bank,
}
