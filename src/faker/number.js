import { rand } from '../core/random.js';

/**
 * Generates a random integer between min and max (inclusive).
 * @param {number} min - Minimum integer.
 * @param {number} max - Maximum integer.
 * @returns {number} Random integer.
 */
function int(min = 0, max = 100) {
  return Math.floor(rand() * (max - min + 1)) + min;
}

/**
 * Generates a random float between min and max.
 * @param {number} min - Minimum float.
 * @param {number} max - Maximum float.
 * @param {number} decimals - Number of decimal places.
 * @returns {number} Random float.
 */
function float(min = 0, max = 1, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round((rand() * (max - min) + min) * factor) / factor;
}

/**
 * Rolls an N-sided die.
 * @param {number} sides - Number of sides.
 * @returns {number} Result of the roll.
 */
function dice(sides = 6) {
  return int(1, sides);
}

export const number = {
  int,
  float,
  dice,
};
