let seedValue = 1;
let randomFn = mulberry32(seedValue);

/**
 * Returns a random float between 0 (inclusive) and 1 (exclusive).
 * @returns {number} Pseudo-random float.
 */
export function rand() {
  return randomFn();
}

/**
 * Mulberry32 PRNG - small, fast, deterministic
 * @param {number} a - Seed value.
 * @returns {function(): number} Random function.
 */
function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}