import { ValidSymbol } from "../../domain/types/valid-symbol";

export interface GetRandomHashProps {
  symbol: ValidSymbol;
  length: number;
}
