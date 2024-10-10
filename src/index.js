"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckOfCards = exports.Card = void 0;
var utils_1 = require("./utils");
var Card = /** @class */ (function () {
    /**
     * Creates an instance of a card.
     * @param {Suit | Joker} suit - The suit of the card (e.g., 'Spade', 'Heart', 'Joker').
     * @param {Value | Joker} value - The value of the card (e.g., 'Ace', '2', 'Joker').
     */
    function Card(suit, value) {
        this._suit = suit;
        this._value = value;
        // Set color based on suit
        if (this._suit === 'Spade' || this._suit === 'Club') {
            this._color = 'Black';
        }
        else if (this._suit === 'Heart' || this._suit === 'Diamond') {
            this._color = 'Red';
        }
        // Set numeric value
        if (value === 'Joker') {
            this._numeric_value = 'Joker';
        }
        else {
            this._numeric_value = utils_1.num_values[utils_1.values.findIndex(function (v) { return v === value; })];
        }
    }
    Object.defineProperty(Card.prototype, "suit", {
        /**
         * Gets the suit of the card.
         * @returns {Suit | Joker} The suit of the card.
         */
        get: function () {
            return this._suit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "value", {
        /**
         * Gets the value of the card.
         * @returns {Value | Joker} The value of the card.
         */
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "color", {
        /**
         * Gets the color of the card.
         * @returns {'Red' | 'Black'} The color of the card.
         */
        get: function () {
            return this._color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "numeric_value", {
        /**
         * Gets the numeric value of the card.
         * @returns {Num_Value | Joker} The numeric value of the card.
         */
        get: function () {
            return this._numeric_value;
        },
        /**
         * Sets the numeric value of the card.
         * @param {Num_Value | Joker} value - The new numeric value of the card.
         */
        set: function (value) {
            this._numeric_value = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Converts the card to a string representation.
     * @returns {string} The card in string format (e.g., 'Ace of Spades with numeric value 1').
     */
    Card.prototype.toString = function () {
        return "".concat(this.value, " of ").concat(this.suit, "s with numeric value ").concat(this._numeric_value);
    };
    /**
     * Gets the numeric value of the card.
     * @returns {Num_Value | Joker} The numeric value.
     */
    Card.prototype.toValue = function () {
        return this.numeric_value;
    };
    /**
     * Converts the card to an emoji representation.
     * @returns {string} The card represented as emojis.
     */
    Card.prototype.toEmoji = function () {
        return "".concat(utils_1.emoji_map[this._numeric_value]).concat(utils_1.emoji_map[this._suit]);
    };
    return Card;
}());
exports.Card = Card;
var DeckOfCards = /** @class */ (function () {
    /**
     * Creates a new deck of cards.
     * @param {boolean} [jokers=false] - Whether or not to include jokers in the deck.
     * @param {boolean} [aceIsEleven=false] - Whether Ace should have a value of 11 instead of 1.
     */
    function DeckOfCards(jokers, aceIsEleven) {
        if (jokers === void 0) { jokers = false; }
        if (aceIsEleven === void 0) { aceIsEleven = false; }
        this._cards = [];
        this._discardPile = [];
        for (var _i = 0, suits_1 = utils_1.suits; _i < suits_1.length; _i++) {
            var s = suits_1[_i];
            for (var _a = 0, values_1 = utils_1.values; _a < values_1.length; _a++) {
                var v = values_1[_a];
                var newCard = new Card(s, v);
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
    DeckOfCards.prototype.toString = function () {
        return "".concat(this._cards);
    };
    /**
     * Shuffles the deck.
     */
    DeckOfCards.prototype.shuffle = function () {
        this._cards.sort(function () { return Math.random() - 0.5; });
    };
    /**
     * Draws a card from the top of the deck.
     * @returns {Card | undefined} The card drawn from the top of the deck.
     */
    DeckOfCards.prototype.draw = function () {
        return this._cards.pop();
    };
    /**
     * Discards a card to the discard pile.
     * @param {Card} card - The card to discard.
     */
    DeckOfCards.prototype.discard = function (card) {
        this._discardPile.unshift(card);
    };
    /**
     * Adds a card to the top of the deck.
     * @param {Card} card - The card to add.
     */
    DeckOfCards.prototype.addCard = function (card) {
        this._cards.unshift(card);
    };
    /**
     * Adds a card to the top of the deck and then shuffles the deck.
     * @param {Card} card - The card to add and shuffle.
     */
    DeckOfCards.prototype.shuffleCard = function (card) {
        this.addCard(card);
        this.shuffle();
    };
    /**
     * Adds a card to the bottom of the deck.
     * @param {Card} card - The card to add to the bottom.
     */
    DeckOfCards.prototype.slipCard = function (card) {
        this._cards.push(card);
    };
    /**
     * Reveals the top card of the deck.
     */
    DeckOfCards.prototype.reveal = function () {
        console.log(this._cards[0]);
    };
    return DeckOfCards;
}());
exports.DeckOfCards = DeckOfCards;
