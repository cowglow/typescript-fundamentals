/**
 * Title: typescript-fundamentals
 *
 * Repository:
 * Author: Philip Saa <@cowglow>
 * License: MIT
 */

import { GetRandomHash } from "./application/get-random-hash";

const targetElement = document.getElementById("app");

if (targetElement) {
  const output = GetRandomHash("#", 7);

  targetElement.innerText = output;

  setInterval(() => {
    targetElement.innerText = GetRandomHash("$", 7);
  }, 1000);
}
