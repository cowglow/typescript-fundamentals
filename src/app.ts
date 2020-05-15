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
  const randomHash = GetRandomHash("$", 7);
  setInterval(() => {
    targetElement.innerText = randomHash;
  }, 1000);
}
