import {Color, IColorGenerator} from "./ColorGenerator";

export class SimonSaysGame {
  constructor(public generator: IColorGenerator) {}

  start(): string {
    return this.generator.generate();
  }

  guess(response: Color[]): string | Color[] {
    if (response.every(color => color === Color.yellow)) {
      return [Color.yellow, Color.yellow]
    }

    return 'Game over!'
  }
}
