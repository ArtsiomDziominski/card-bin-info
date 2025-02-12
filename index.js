const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data');
const data = {};

fs.readdirSync(dataPath).forEach(file => {
    if (file.endsWith('.json')) {
        const filePath = path.join(dataPath, file);
        const key = path.basename(file, '.json'); // Имя файла без расширения
        data[key] = require(filePath);
    }
});

function nameBank(bin, local) {
    const binList = data[`bins-${local}`];
    return binList?.[bin];
}

function bank(bin, local) {
    const binList = data[`bins-${local}`];
    const nameBank = binList?.[bin];
    const bankList = data[`banks-${local}`];
    return bankList?.[nameBank];
}

module.exports = { bank, nameBank };
