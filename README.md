# 🚀 card-bin-info

**card-bin-info** is a library for retrieving information by the BIN code of a payment card.  
It allows you to determine the issuing bank using local JSON data.

## 📦 Installation

```sh
npm install card-bin-info
```

## 🔧 Usage

```javascript
// Suppose we import the functions from your file:
import { nameBank, bank } from 'card-bin-info';

// Example BIN code
const binCode = '964396';

// Get the bank's name
const bankName = nameBank(binCode);
console.log('Bank Name:', bankName);
// It will print, for example: "Sberbank" or undefined if the BIN is not found

// Get the bank object with additional information
const bankInfo = bank(binCode);
console.log('Bank Info:', bankInfo);
// It will print, for example: { bankName: "Sberbank", country: "ru", ... }
// or undefined if the BIN is not found