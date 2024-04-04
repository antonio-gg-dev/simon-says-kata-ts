export interface IColorGenerator {
  generate(): Color;
}

export enum Color {
  yellow = "yellow",
  green = "green",
  red = "red",
  blue = "blue",
}
