# Changelog

## v0.1.0

### Added
- Initial release of `@herb-ert/mockkitjs`.
- Deterministic random number generator (`mulberry32`) in `core/random.js`.
- `seed(number)` function to set global PRNG seed.
- `faker.number` module with:
  - `int(min, max)` — Generates a random integer.
  - `float(min, max, decimals)` — Generates a float with fixed precision.
  - `dice(sides)` — Simulates an N-sided die roll.

### Notes
- All random values are **deterministic** and **seedable**, ideal for repeatable testing and mock data generation.
- `faker` is modular and extensible — new modules for names, dates, arrays, etc., are planned.
