/**
 * typescript fundamentals
 */

import { ValidSymbol } from "../domain/application";

/**
 * Get Random Hash
 * @param value ValidSymbol
 * @param length number
 * @constructor
 */
export const GetRandomHash = (value: ValidSymbol, length: number) => {
  const random = Math.random().toString(36);
  return value + random.slice(length).toString();
};
