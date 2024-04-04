import { Color } from "../src/ColorGenerator";
import { SimonSaysGame } from "../src/SimonSaysGame";

describe("SimonSaysGame", () => {
  it("should return green when the game starts", () => {
    const game = new SimonSaysGame({
      generate: () => Color.green,
    });

    expect(game.start()).toBe(Color.green);
  });

  it("should return yellow when the game starts", () => {
    const game = new SimonSaysGame({
      generate: () => Color.yellow,
    });

    expect(game.start()).toBe(Color.yellow);
  });
});
