import { suits, values, num_values, emoji_map } from './utils';
import { Suit, Value, Num_Value, Joker } from './types';

interface ICard {
  suit: Suit | Joker;
  value: Value | Joker;
  color: 'Red' | 'Black';
  numeric_value: Num_Value | Joker;
}

class Card implements ICard {
  private _suit: ICard['suit'];
  private _value: ICard['value'];
  private _color!: ICard['color'];
  private _numeric_value: ICard['numeric_value'];

  /**
   * Creates an instance of a card.
   * @param {Suit | Joker} suit - The suit of the card (e.g., 'Spade', 'Heart', 'Joker').
   * @param {Value | Joker} value - The value of the card (e.g., 'Ace', '2', 'Joker').
   */
  constructor(suit: ICard['suit'], value: ICard['value']) {
    this._suit = suit;
    this._value = value;

    // Set color based on suit
    if (this._suit === 'Spade' || this._suit === 'Club') {
      this._color = 'Black';
    } else if (this._suit === 'Heart' || this._suit === 'Diamond') {
      this._color = 'Red';
    }

    // Set numeric value
    if (value === 'Joker') {
      this._numeric_value = 'Joker';
    } else {
      this._numeric_value = num_values[
        values.findIndex((v) => v === value)
      ] as Num_Value;
    }
  }

  /**
   * Gets the suit of the card.
   * @returns {Suit | Joker} The suit of the card.
   */
  get suit() {
    return this._suit;
  }

  /**
   * Gets the value of the card.
   * @returns {Value | Joker} The value of the card.
   */
  get value() {
    return this._value;
  }

  /**
   * Gets the color of the card.
   * @returns {'Red' | 'Black'} The color of the card.
   */
  get color() {
    return this._color;
  }

  /**
   * Gets the numeric value of the card.
   * @returns {Num_Value | Joker} The numeric value of the card.
   */
  get numeric_value() {
    return this._numeric_value;
  }

  /**
   * Sets the numeric value of the card.
   * @param {Num_Value | Joker} value - The new numeric value of the card.
   */
  set numeric_value(value: Num_Value | Joker) {
    this._numeric_value = value;
  }

  /**
   * Converts the card to a string representation.
   * @returns {string} The card in string format (e.g., 'Ace of Spades with numeric value 1').
   */
  toString() {
    return `${this.value} of ${this.suit}s with numeric value ${this._numeric_value}`;
  }

  /**
   * Gets the numeric value of the card.
   * @returns {Num_Value | Joker} The numeric value.
   */
  toValue() {
    return this.numeric_value;
  }

  /**
   * Converts the card to an emoji representation.
   * @returns {string} The card represented as emojis.
   */
  toEmoji(): string {
    return `${emoji_map[this._numeric_value]}${
      emoji_map[this._suit]
    }`;
  }
}

class DeckOfCards {
  private _cards: Card[] = [];
  private _discardPile: Card[] = [];

  /**
   * Creates a new deck of cards.
   * @param {boolean} [jokers=false] - Whether or not to include jokers in the deck.
   * @param {boolean} [aceIsEleven=false] - Whether Ace should have a value of 11 instead of 1.
   */
  constructor(jokers: boolean = false, aceIsEleven: boolean = false) {
    for (let s of suits) {
      for (let v of values) {
        const newCard = new Card(s, v);

        // If Ace is 11
        if (v === 'Ace' && aceIsEleven) {
          newCard.numeric_value = 11;
        }
        this._cards.push(newCard);
      }
    }

    // Add two jokers if specified
    if (jokers) {
      this._cards.push(new Card('Joker', 'Joker'));
      this._cards.push(new Card('Joker', 'Joker'));
    }
  }

  /**
   * Converts the deck to a string representation.
   * @returns {string} The deck in string format.
   */
  toString() {
    return `${this._cards}`;
  }

  /**
   * Shuffles the deck.
   */
  shuffle() {
    this._cards.sort(() => Math.random() - 0.5);
  }

  /**
   * Draws a card from the top of the deck.
   * @returns {Card | undefined} The card drawn from the top of the deck.
   */
  draw() {
    return this._cards.pop();
  }

  /**
   * Discards a card to the discard pile.
   * @param {Card} card - The card to discard.
   */
  discard(card: Card) {
    this._discardPile.unshift(card);
  }

  /**
   * Adds a card to the top of the deck.
   * @param {Card} card - The card to add.
   */
  addCard(card: Card) {
    this._cards.unshift(card);
  }

  /**
   * Adds a card to the top of the deck and then shuffles the deck.
   * @param {Card} card - The card to add and shuffle.
   */
  shuffleCard(card: Card) {
    this.addCard(card);
    this.shuffle();
  }

  /**
   * Adds a card to the bottom of the deck.
   * @param {Card} card - The card to add to the bottom.
   */
  slipCard(card: Card) {
    this._cards.push(card);
  }

  /**
   * Reveals the top card of the deck.
   */
  reveal() {
    console.log(this._cards[0]);
  }
}

export { Card, DeckOfCards };
