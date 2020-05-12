/**
 * typescript fundamentals
 */

import { ValidSymbol } from "./domain/types/valid-symbol";

/**
 * Get Random Hash
 * @param symbol string
 * @param length number
 */
function getRandomHash(symbol: ValidSymbol, length: number) {
  return (
    symbol +
    Math.random()
      .toString(36)
      .slice(length)
  );
}

/**
 * Scaffold target element
 */
const targetElement = document.getElementById("app");

/**
 * Main
 */
function foo(): void {
  if (targetElement) {
    setInterval(() => {
      targetElement.innerText = getRandomHash("$", 7);
    }, 1000);
  }
}

foo();
