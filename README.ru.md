# 🚀 card-bin-info

**card-bin-info** — это библиотека для поиска информации по BIN-коду банковской карты.  
Она позволяет определить банк, который выпустил карту, используя локальные JSON-данные.

## 📦 Установка

```sh
npm install card-bin-info
```

## 🔧 Использование

```javascript
// Допустим, мы импортируем функции из вашего файла:
import { nameBank, bank } from 'card-bin-info';

// Пример BIN-кода
const binCode = '964396';

// Получаем название банка
const bankName = nameBank(binCode);
console.log('Bank Name:', bankName);
// Выведет, например: "Сбербанк" или undefined, если BIN не найден

// Получаем объект с информацией о банке
const bankInfo = bank(binCode);
console.log('Bank Info:', bankInfo);
// Выведет, например: { bankName: "Сбербанк", country: "ru", ... } 
// или undefined, если BIN не найден
```

