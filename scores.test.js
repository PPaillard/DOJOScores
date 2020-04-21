const updateScore = require('./scores');

const scores = [
  {
    "player": "Maggie",
    "score": 762
  },
  {
    "player": "Annie",
    "score": 102
  },
  {
    "player": "Sanchez",
    "score": 882
  },
  {
    "player": "Dee",
    "score": 609
  }
];

test('Add 50 to Dee score', () => {
  expect(updateScore(scores, "Dee", 50)).toStrictEqual([
    {
      "player": "Maggie",
      "score": 762
    },
    {
      "player": "Annie",
      "score": 102
    },
    {
      "player": "Sanchez",
      "score": 882
    },
    {
      "player": "Dee",
      "score": 659
    }
  ]);
});

test('subtract 100 to Maggie score', () => {
  expect(updateScore(scores, "Maggie", -100)).toStrictEqual([
    {
      "player": "Maggie",
      "score": 662
    },
    {
      "player": "Annie",
      "score": 102
    },
    {
      "player": "Sanchez",
      "score": 882
    },
    {
      "player": "Dee",
      "score": 609
    }
  ]);
});

test('Must floor the modifier value if it is a float number', () => {
  expect(updateScore(scores, "Maggie", 50.56)).toStrictEqual([
    {
      "player": "Maggie",
      "score": 712
    },
    {
      "player": "Annie",
      "score": 102
    },
    {
      "player": "Sanchez",
      "score": 882
    },
    {
      "player": "Dee",
      "score": 609
    }
  ]);
});

test('Score must remain unchanged if wrong parameter as player or modifier', () => {
  expect(updateScore(scores, "Maggie", "fifty")).toStrictEqual(scores);
});

test('Score must remain unchanged if wrong parameter as player or modifier', () => {
  expect(updateScore(scores, "Michelle", 25)).toStrictEqual(scores);
});