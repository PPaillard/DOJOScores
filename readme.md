# Score dojo

## Step 1

Write a function `updateScore(scores, player, modifier)` that returns an array with the modifier applied to the specified player's score.

Example :

```javascript

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

updateScore(scores, "Sanchez", 100)

/* 

Should return 

[
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
    "score": 982 (100 has been added here)
  },
  {
    "player": "Dee",
    "score": 609
  }
]

*/
```

## Step 2

Write a function `podium(scores)` that will return the 3 best scores sorted by score

```javascript

podium(scores)

/*
Should return

[
  {
    "player": "Sanchez",
    "score": 982
  },
  {
    "player": "Maggie",
    "score": 762
  },
  {
    "player": "Dee",
    "score": 609
  }
]

*/
```