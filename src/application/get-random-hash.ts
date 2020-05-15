/**
 * typescript fundamentals
 */

import { ValidSymbol } from "../domain/types/valid-symbol";

/**
 * Get Random Hash
 * @param GetRandomHashProps
 * @constructor
 */

export interface GetRandomHashProps {
  symbol: ValidSymbol;
  length: number;
}

export const GetRandomHash = <GetRandomHashProps>({
  symbol: string,
  length: number
}) => {
  const random = Math.random().toString(36);
  return symbol + random.slice(length);
};
