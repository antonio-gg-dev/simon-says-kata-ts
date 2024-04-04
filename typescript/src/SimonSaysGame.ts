import { Color, IColorGenerator } from "./ColorGenerator";

export class SimonSaysGame {
  constructor(public generator: IColorGenerator) {}

  start(): string {
    return this.generator.generate();
  }

  guess(response:Color[]) : string {
    return 'Game over!'
  }
}
