# 🚀 card-bin-info

**card-bin-info** — это библиотека для поиска информации по BIN-коду банковской карты.  
Она позволяет определить банк, который выпустил карту, используя локальные JSON-данные.

## 📦 Установка

```sh
npm install card-bin-info
```

## 🔧 Использование

```javascript
const { bank, nameBank } = require('card-bin-info');

// Получение названия банка по BIN-коду
const bankName = nameBank('964396', 'ru');
console.log(bankName); // Например: "Сбербанк"

// Получение полной информации о банке по BIN-коду
const bankInfo = bank('964396', 'ru');
console.log(bankInfo); // Например: { name: "Сбербанк", country: "RU", type: "debit", ... }
```

## 📌 API

### `nameBank(bin, local)`
- **Описание**: Получает только название банка по BIN-коду.
- **Аргументы**:
    - `bin` (string) — 6-значный BIN-код.
    - `local` (string) — локаль (`ru`, `us` и т. д.).
- **Возвращает**: `string | undefined` — название банка или `undefined`, если BIN не найден.

### `bank(bin, local)`
- **Описание**: Получает детальную информацию о банке по BIN-коду.
- **Аргументы**:
    - `bin` (string) — 6-значный BIN-код.
    - `local` (string) — локаль (`ru`, `us` и т. д.).
- **Возвращает**: `object | undefined` — объект с информацией о банке или `undefined`, если BIN не найден.

## 📂 Структура проекта

```
card-bin-info/
│── data                   # BIN-коды
│── index.js               # Основной файл библиотеки
│── package.json           # Настройки npm-пакета
│── test.js                # Тестовый файл
│── README.md              # Документация
```

## 🛠 Добавление новых данных

1. Добавь новый JSON-файл в папку `data/`, например `bins-us.json` и `banks-us.json`.
2. Структура `bins-us.json`:
   ```json
   {
     "400000": "Bank of America",
     "401288": "Chase"
   }
   ```
3. Структура `banks-us.json`:
   ```json
   {
     "Bank of America": { "name": "Bank of America", "country": "US", "type": "credit" },
     "Chase": { "name": "Chase", "country": "US", "type": "debit" }
   }
   ```

## 📜 Лицензия

MIT © 2025

