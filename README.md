# 🧪 Mockkit.js

**Mockkit.js** is a deterministic mock data generator — a small, fast utility to generate predictable, structured fake data for testing, seeding, prototyping, and demos.

[![NPM version](https://img.shields.io/npm/v/@herb-ert/mockkitjs)](https://www.npmjs.com/package/@herb-ert/mockkitjs)
[![NPM downloads](https://img.shields.io/npm/dw/@herb-ert/mockkitjs)](https://www.npmjs.com/package/@herb-ert/mockkitjs)
[![GitHub issues](https://img.shields.io/github/issues/herb-ert/mockkitjs)](https://github.com/herb-ert/mockkitjs/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/herb-ert/mockkitjs)](https://github.com/herb-ert/mockkitjs/pulls)
[![GitHub contributors](https://img.shields.io/github/contributors/herb-ert/mockkitjs)](https://github.com/herb-ert/mockkitjs/graphs/contributors)
[![GitHub forks](https://img.shields.io/github/forks/herb-ert/mockkitjs)](https://github.com/herb-ert/mockkitjs/network)
[![GitHub stars](https://img.shields.io/github/stars/herb-ert/mockkitjs)](https://github.com/herb-ert/mockkitjs/stargazers)

> ⚡ Powered by a seedable pseudo-random generator for repeatable results.

---

## 🚀 Features

- 🎲 Seeded randomness for predictable mock data
- 📦 Lightweight and dependency-free
- 🔧 Structured fake data: numbers, names, and more (extensible)
- 💡 Ideal for testing, seeding databases, or building demos
- 🧩 Modular design — import only what you need

---

## 📦 Installation

```bash
npm install @herb-ert/mockkitjs
```

## 🛠️ Usage

```js
import { seed } from '@herb-ert/mockkitjs';
import { faker } from '@herb-ert/mockkitjs';

// Set a seed for deterministic results
seed(43);

// Use faker modules
console.log(faker.number.int(10, 50));    // Same number every time with same seed
console.log(faker.number.float(0, 1));    // e.g., 0.35
console.log(faker.number.dice(20));       // Roll a D20
```

## 📚 API

### Core

#### `seed(number)`
Sets the global seed for deterministic randomness.

---

### Faker Modules

#### `faker.number.int(min, max)`
Returns a random integer between `min` and `max` (inclusive).

#### `faker.number.float(min, max, decimals)`
Returns a random float with specified decimal precision.

#### `faker.number.dice(sides)`
Simulates rolling an `N`-sided die.

> More modules coming soon — names, dates, strings, arrays, and more!

---

## 🧪 Why Deterministic?

Mockkit uses a seedable PRNG to give you **consistent** data across test runs or rebuilds.  
Perfect for unit tests, snapshot testing, or consistent seeding during development.

---

## 📃 License

MIT — © [herb-ert](https://github.com/herb-ert)

---

## 🛤️ Roadmap

- [x] Number module
- [ ] Name generator
- [ ] Date & time mockers
- [ ] String / text generators
- [ ] Array & object builders
- [ ] Faker extensibility API

---

## 📄 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history and release notes.