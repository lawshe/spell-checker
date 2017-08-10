# Spell Checker
An app to spell check using [BASIC English](http://ogden.basic-english.org/basiceng.html).

Currently, using 850 basic words and plural variations of things.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installing
Clone the repository
```
$ git clone https://github.com/lawshe/spell-checker.git
$ cd spell-checker
$ npm install
```

### Running
```
$ npm run dev
```
Go to http://localhost:8080/ in your browser.

## Testing
Testing redux action creators and reducers using [Jest](https://facebook.github.io/jest/). Test files are in `\_\_tests_\_\`. To run tests,
```
$ npm test
```

## Production
Build for production,
```
$ npm run build
```
Running in production
```
$ npm start
```

## To Do
- Handle other grammer rules: change verbs into adjectives, change verbs into nouns, change adjectives into adverbs, -un prefix, combined words
- Add tests for components
- Remove HTML from input
- Handle new lines in <textarea> input
- Update Jest to handle Webpack alias
- Add clear button
- Add hover to `.brand-logo`
- Add message explaining that highlighted words in "Spell Checked" were not found in Basic English

## Possible Updates
- Consolidate text input/output into 1 view, perhaps using a WYSIWYG
- Add word suggestions
