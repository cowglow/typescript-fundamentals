/**
 * Title: typescript-fundamentals
 *
 * Repository:
 * Author: Philip Saa <@cowglow>
 * License: MIT
 */

import { ValidSymbol } from "./domain/application";
import { GetRandomHash } from "./application/get-random-hash";

const symbolCollection: ValidSymbol[] = ["#", "$"];
const length: number = 7;

/** Display it */
const targetElement = document.getElementById("app");
if (targetElement) {
  targetElement.innerText = GetRandomHash("#", length);

  setInterval(() => {
    const randomHash: ValidSymbol = symbolCollection[Date.now() % 2];
    targetElement.innerText = GetRandomHash(randomHash, length);
  }, 900);
}
