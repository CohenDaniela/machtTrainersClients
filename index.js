'use strict'
const trainers = [
  {
    name: 'A',
    reputation: 4.5,
    place: 1
  },
  {
    name: 'B',
    reputation: 3.2,
    place: 4
  },
  {
    name: 'C',
    reputation: 1.2,
    place: 3
  },
  {
    name: 'D',
    reputation: 3.4,
    place: 2
  }


]
const clients = [
  { name: 'q', importanceReputation: 2.6 },
  { name: 'r', importanceReputation: 3.7 },
  { name: 's', importanceReputation: 8.5 },
  { name: 't', importanceReputation: 9.7 },
  { name: 'u', importanceReputation: 2.6 },
  { name: 'v', importanceReputation: 4.7 },
  { name: 'w', importanceReputation: 5.6 },
  { name: 'x', importanceReputation: 3.7 },
  { name: 'y', importanceReputation: 8.1 },
  { name: 'z', importanceReputation: 2.5 },
]
const findBestMatch = (trainers, clients) => {

  trainers.sort((a, b) => b.reputation - a.reputation);
  clients.sort((a, b) => b.importanceReputation - a.importanceReputation);
  const matches = [];

  for (const client of clients) {

    for (const trainer of trainers) {
      const isAnyPlace = trainer.place > 0
      if (isAnyPlace) {
        const satisfaction = Math.round(client.importanceReputation * trainer.reputation / 5)
        matches.push({
          trainer: trainer.name,
          client: client.name,
          satisfaction: satisfaction
        })
        trainer.place--
        break
      }
    }
  }
  return matches
}
const result = findBestMatch(trainers, clients)

console.log(result)