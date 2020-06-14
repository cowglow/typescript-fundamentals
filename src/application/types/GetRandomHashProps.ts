import { ValidSymbol } from "../../domain/application";

export interface GetRandomHashProps {
  symbol: ValidSymbol;
  length: number;
}
