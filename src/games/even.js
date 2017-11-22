export const text = 'Answer "yes" if number even otherwise answer "no".\n';

export const gameRounds = 3;

export const pairs = [];

const consPairs = () => {
  for (let i = 0; i !== gameRounds; i += 1) {
    const result = {};
    result.question = Math.floor(Math.random() * 100);
    result.answer = (result.question % 2 === 0) ? 'yes' : 'no';
    pairs.push(result);
  }
};

consPairs();
