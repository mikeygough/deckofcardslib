# deck-of-cards

![npm bundle size](https://img.shields.io/bundlephobia/min/%40mikeygough%2Fdeck-of-cards)

![NPM Version](https://img.shields.io/npm/v/%40mikeygough%2Fdeck-of-cards)

deck-of-cards is a JS library for a deck of cards.

values for each card are set in `utils.ts`. please note that order matters when setting numeric_values to values.

### Test App

a test app is built right into this module! simply open up the index.html in live-server to view functionality.

### Description

this library includes the `Card` and `deck-of-cards` objects. As you can probably imagine, a `deck-of-cards` object houses several `Card` objects.

a `Card` has the following private properties: suit (Spade, Heart, Diamond, Club), value, color and numeric_value.

additionally, a `Card` has a number of methods, including getters for suit, value, color & numeric_value (which also has a setter). those methods are: toString, toValue and toEmoji.

a `deck-of-cards` has two private properties: cards & discardPile. a `deck-of-cards` takes in two optional parameters at initialization, _jokers_ (which adds two jokers to the deck) and _aceIsEleven_ which overrised the default value of an ace from 1 to 11.

additionally, a `deck-of-cards` has several supporting methods: toString, shuffle, draw, discard, addCard, shuffleCard, slipCard & reveal.

### testing notes

this repository includes unit tests. the tests are helpful for understanding how each function should perform. if you add a new function, please add a corresponding test.

run all tests with:

`npm test`

generate a test coverage report with:

`npm jest --coverage`

#### additional notes
