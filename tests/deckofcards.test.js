const { DeckOfCards, Card } = require('../src/index');

describe('DeckOfCards Class', () => {
  test('should initialize a full deck of cards', () => {
    const deck = new DeckOfCards();
    expect(deck).toBeDefined();
    expect(deck['_cards'].length).toBe(52);
  });

  test('should include jokers if option is true', () => {
    const deck = new DeckOfCards(true);
    expect(deck['_cards'].length).toBe(54);
  });

  test('should shuffle the deck of cards', () => {
    const deck = new DeckOfCards();
    const originalOrder = [...deck['_cards']];
    deck.shuffle();
    expect(deck['_cards']).not.toEqual(originalOrder);
  });

  test('should draw a card from the deck', () => {
    const deck = new DeckOfCards();
    const initialLength = deck['_cards'].length;
    const drawnCard = deck.draw();
    expect(drawnCard).toBeInstanceOf(Card);
    expect(deck['_cards'].length).toBe(initialLength - 1);
  });

  test('should discard a card correctly', () => {
    const deck = new DeckOfCards();
    const card = deck.draw();
    deck.discard(card);
    expect(deck['_discardPile'][0]).toBe(card);
  });

  test('should slip a card back to the bottom of the deck', () => {
    const deck = new DeckOfCards();
    const card = deck.draw();
    deck.slipCard(card);
    expect(deck['_cards'][deck['_cards'].length - 1]).toBe(card);
  });

  test('should shuffle a card back into the deck', () => {
    const deck = new DeckOfCards();
    const card = deck.draw();
    deck.shuffleCard(card);
    expect(deck['_cards'].length).toBe(52);
    expect(deck['_cards']).toContain(card);
  });

  test('should reveal the top card in the deck', () => {
    const deck = new DeckOfCards();
    const topCard = deck['_cards'][0];
    console.log = jest.fn();
    deck.reveal();
    expect(console.log).toHaveBeenCalledWith(topCard);
  });
});
