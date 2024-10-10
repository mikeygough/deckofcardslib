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

  constructor(suit: ICard['suit'], value: ICard['value']) {
    this._suit = suit;
    this._value = value;

    // set color
    if (this._suit === 'Spade' || this._suit === 'Club') {
      this._color = 'Black';
    } else if (this._suit === 'Heart' || this._suit === 'Diamond') {
      this._color = 'Red';
    }

    // set numeric_value
    if (value === 'Joker') {
      this._numeric_value = 'Joker';
    } else {
      this._numeric_value = num_values[
        values.findIndex((v) => v === value)
      ] as Num_Value;
    }
  }

  get suit() {
    return this._suit;
  }

  get value() {
    return this._value;
  }

  get color() {
    return this._color;
  }

  get numeric_value() {
    return this._numeric_value;
  }

  set numeric_value(value) {
    this._numeric_value = value;
  }

  toString() {
    return `${this.value} of ${this.suit}s with numeric value ${this._numeric_value}`;
  }

  toValue() {
    return this.numeric_value;
  }

  toEmoji(): String {
    return `${emoji_map[this._numeric_value]}${
      emoji_map[this._suit]
    }`;
  }
}

class DeckOfCards {
  private _cards: Card[] = [];
  private _discardPile: Card[] = [];

  constructor(jokers: boolean = false, aceIsEleven: boolean = false) {
    for (let s of suits) {
      for (let v of values) {
        const newCard = new Card(s, v);

        // if Ace is 11
        if (v === 'Ace' && aceIsEleven) {
          newCard.numeric_value = 11;
        }
        this._cards.push(newCard);
      }
    }

    // add two jokers
    if (jokers) {
      this._cards.push(new Card('Joker', 'Joker'));
      this._cards.push(new Card('Joker', 'Joker'));
    }
  }

  toString() {
    return `${this._cards}`;
  }

  shuffle() {
    this._cards.sort(() => Math.random() - 0.5);
  }

  draw() {
    return this._cards.pop();
  }

  discard(card: Card) {
    this._discardPile.unshift(card);
  }

  addCard(card: Card) {
    this._cards.unshift(card);
  }

  shuffleCard(card: Card) {
    this.addCard(card);
    this.shuffle();
  }

  slipCard(card: Card) {
    this._cards.push(card);
  }

  reveal() {
    console.log(this._cards[0]);
  }
}

export { Card, DeckOfCards };
