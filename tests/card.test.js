const { Card } = require('../src/index');

describe('Card Class', () => {
  test('should create a card with correct suit and value', () => {
    const card = new Card('Spade', 'Ace');
    expect(card.suit).toBe('Spade');
    expect(card.value).toBe('Ace');
    expect(card.color).toBe('Black');
    expect(card.numeric_value).toBe(1);
  });

  test('should assign color Red for Hearts and Diamonds', () => {
    const heartCard = new Card('Heart', 'King');
    const diamondCard = new Card('Diamond', 'Queen');
    expect(heartCard.color).toBe('Red');
    expect(diamondCard.color).toBe('Red');
  });

  test('should assign color Black for Spades and Clubs', () => {
    const spadeCard = new Card('Spade', 'Ten');
    const clubCard = new Card('Club', 'Nine');
    expect(spadeCard.color).toBe('Black');
    expect(clubCard.color).toBe('Black');
  });

  test('should create a Joker card with correct values', () => {
    const jokerCard = new Card('Joker', 'Joker');
    expect(jokerCard.suit).toBe('Joker');
    expect(jokerCard.value).toBe('Joker');
    expect(jokerCard.numeric_value).toBe('Joker');
  });

  test('should update numeric_value correctly', () => {
    const card = new Card('Spade', 'Ace');
    card.numeric_value = 11;
    expect(card.numeric_value).toBe(11);
  });

  test('should convert to string representation correctly', () => {
    const card = new Card('Club', 'Ten');
    expect(card.toString()).toBe(
      'Ten of Clubs with numeric value 10'
    );
  });

  test('should return emoji representation', () => {
    const card = new Card('Heart', 'Ace');
    expect(card.toEmoji()).toBe('１❤️');
  });
});
