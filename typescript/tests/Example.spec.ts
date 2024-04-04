import { SimonSaysGame } from '../src/SimonSaysGame'

describe('SimonSaysGame', () => {
  it('should return a color when the game starts', () => {
    const game = new SimonSaysGame()

    expect(game.start()).toBe('green')
  })
})
