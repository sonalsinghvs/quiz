const myQuiz = [
  { question: 'What do caterpillars turn into?', answer: 'Butterflies' },
  { question: 'How many legs does a Spider have?', answer: '8' },
  { question: 'What is the largest mammal in the world?', answer: 'Whale' },
  { question: 'How many pairs of wings do bees have?', answer: 'Two' }
];
const myRandomQuestion = myQuiz[Math.round(Math.random() * myQuiz.length - 1)];
let userAnswer = prompt(myRandomQuestion.question, ' ');
window.alert('You answered' + ' ' + userAnswer + '. ' + 'The correct answer is' + ' ' + myRandomQuestion.answer + '.');
