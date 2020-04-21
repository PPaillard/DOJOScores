const podium = require("./podium");

const scores = [
  {
    player: "Maggie",
    score: 762,
  },
  {
    player: "Annie",
    score: 102,
  },
  {
    player: "Sanchez",
    score: 882,
  },
  {
    player: "Dee",
    score: 609,
  },
];

test("Add 50 to Dee score", () => {
  expect(podium(scores)).toStrictEqual([
    {
      player: "Sanchez",
      score: 882,
    },
    {
      player: "Maggie",
      score: 762,
    },
    {
      player: "Dee",
      score: 659,
    }
  ]);
});
