import { Color } from "../src/ColorGenerator";
import { GameOver, SimonSaysGame } from "../src/SimonSaysGame";

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

  it("should return Game over! when user fails", () => {
    const game = new SimonSaysGame({
      generate: () => Color.yellow,
    });

    game.start();

    expect(game.guess([Color.blue])).toBe(GameOver);
  });

  it("should return a new color when user guess yellow", () => {
    const game = new SimonSaysGame({
      generate: () => Color.yellow,
    });

    game.start();

    expect(game.guess([Color.yellow])).toStrictEqual([
      Color.yellow,
      Color.yellow,
    ]);
  });

  it("should return a new color when user guess blue", () => {
    const game = new SimonSaysGame({
      generate: () => Color.blue,
    });

    game.start();

    expect(game.guess([Color.blue])).toStrictEqual([Color.blue, Color.yellow]);
  });

  it("should return a third color when user guess first two colors", () => {
    const game = new SimonSaysGame({
      generate: jest.fn()
        .mockImplementationOnce(() => Color.blue)
        .mockImplementationOnce(() => Color.yellow),
    });

    game.start();

    game.guess([Color.blue]);

    expect(game.guess([Color.blue, Color.yellow])).toStrictEqual([Color.blue, Color.yellow, Color.green]);
  });
});
