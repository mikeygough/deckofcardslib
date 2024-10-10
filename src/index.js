"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckOfCards = exports.Card = void 0;
var utils_1 = require("./utils");
var Card = /** @class */ (function () {
    function Card(suit, value) {
        this._suit = suit;
        this._value = value;
        // set color
        switch (this._suit) {
            case 'Spade':
                this._color = 'Black';
                break;
            case 'Club':
                this._color = 'Black';
                break;
            case 'Heart':
                this._color = 'Red';
                break;
            case 'Diamond':
                this._color = 'Red';
                break;
        }
        // set numeric_value
        if (value === 'Joker') {
            this._numeric_value = 'Joker';
        }
        else {
            this._numeric_value = utils_1.num_values[utils_1.values.findIndex(function (v) { return v === value; })];
        }
    }
    Object.defineProperty(Card.prototype, "suit", {
        get: function () {
            return this._suit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "numeric_value", {
        get: function () {
            return this._numeric_value;
        },
        set: function (value) {
            this._numeric_value = value;
        },
        enumerable: false,
        configurable: true
    });
    Card.prototype.toString = function () {
        return "".concat(this.value, " of ").concat(this.suit, "s with numeric value ").concat(this._numeric_value);
    };
    Card.prototype.toValue = function () {
        return this.numeric_value;
    };
    Card.prototype.toEmoji = function () {
        return "".concat(utils_1.emoji_map[this._numeric_value]).concat(utils_1.emoji_map[this._suit]);
    };
    return Card;
}());
exports.Card = Card;
var DeckOfCards = /** @class */ (function () {
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
    DeckOfCards.prototype.to_s = function () {
        return "".concat(this._cards);
    };
    DeckOfCards.prototype.shuffle = function () {
        this._cards.sort(function () { return Math.random() - 0.5; });
    };
    DeckOfCards.prototype.draw = function () {
        return this._cards.pop();
    };
    DeckOfCards.prototype.discard = function (card) {
        this._discardPile.unshift(card);
    };
    DeckOfCards.prototype.addCard = function (card) {
        this._cards.unshift(card);
    };
    DeckOfCards.prototype.shuffleCard = function (card) {
        this.addCard(card);
        this.shuffle();
    };
    DeckOfCards.prototype.slipCard = function (card) {
        this._cards.push(card);
    };
    DeckOfCards.prototype.reveal = function () {
        console.log(this._cards[0]);
    };
    return DeckOfCards;
}());
exports.DeckOfCards = DeckOfCards;
