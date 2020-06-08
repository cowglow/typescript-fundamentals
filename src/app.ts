/**
 * Title: typescript-fundamentals
 *
 * Repository:
 * Author: Philip Saa <@cowglow>
 * License: MIT
 */

import { ValidSymbol } from "./domain/types/valid-symbol";
import { GetRandomHash } from "./application/get-random-hash";

const symbolCollection: ValidSymbol[] = ["#", "$"];
const length: number = 7;

const hashSymbol = (symbolMap): ValidSymbol => {
  return symbolMap[Date.now() % 2];
};

/** Display it */
const targetElement = document.getElementById("app");
if (targetElement) {
  targetElement.innerText = GetRandomHash("#", length);

  setInterval(() => {
    targetElement.innerText = GetRandomHash(
      hashSymbol(symbolCollection),
      length
    );
  }, 1000);
}
