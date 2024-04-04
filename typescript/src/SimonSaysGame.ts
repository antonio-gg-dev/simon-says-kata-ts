import { Color, IColorGenerator } from "./ColorGenerator";

export class SimonSaysGame {
  private color: Color | null = null;

  constructor(public generator: IColorGenerator) {}

  start(): string {
    this.color = this.generator.generate();

    return this.color;
  }

  guess(response: Color[]): typeof GameOver | Color[] {
    if (!!this.color && response.every((color) => color === this.color)) {
      return [this.color, Color.yellow];
    }

    return GameOver;
  }
}

export const GameOver = "Game over!";
