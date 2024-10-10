import { Suit, Value } from './types';

export const suits: Suit[] = ['Spade', 'Heart', 'Diamond', 'Club'];

export const values: Value[] = [
  'Ace',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Jack',
  'Queen',
  'King',
];

export const num_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export interface EmojiMap {
  [key: number]: string;
  Spade: string;
  Club: string;
  Heart: string;
  Diamond: string;
  Joker: string;
}

export const emoji_map: EmojiMap = {
  1: '１',
  2: '２',
  3: '３',
  4: '４',
  5: '５',
  6: '６',
  7: '７',
  8: '８',
  9: '９',
  10: '１０',
  11: '💂',
  12: '👸',
  13: '🤴',
  Spade: '♠️',
  Club: '♣️',
  Heart: '❤️',
  Diamond: '♦️',
  Joker: '🤡',
};
