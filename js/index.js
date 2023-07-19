const questions = [
  {
    question: "Сколько хромосом у здорового человека?",
    answer: "46",
    type: "prompt",
  },
  {
    question: "Путин - хуйло?",
    answer: true,
    type: "confirm",
  },
  {
    question: "Сколько хромосом у Путина?",
    answer: "47",
    type: "prompt",
  },
  {
    question: "Сколько тупых овец в московии (в млн)?",
    answer: "144",
    type: "prompt",
  },
  {
    question: "Снесли ли памятник Екатерине-2 в Одессе?",
    answer: true,
    type: "confirm",
  },
  {
    question: "Сколько черных пакетов выделяются на одного орка?",
    answer: "1",
    type: "prompt",
  },
  {
    question: "На сколько вы оцениваете работу ЗСУ от 1 до 10?",
    answer: "10",
    type: "prompt",
  },
  {
    question: "Со скольких позиций готовилось нападение на Беларусь?",
    answer: "4",
    type: "prompt",
  },
  {
    question: "Нужно ли сжигать сосийский флаг?",
    answer: true,
    type: "confirm",
  },
  {
    question: "Поддерживаете ли вы уход иностранных компаний из московии?",
    answer: true,
    type: "confirm",
  },
  {
    question: "Считаете ли вы сосию своим домом?",
    answer: false,
    type: "confirm",
  },
];
function askQuestion(questionObj) {
  let userAnswer;
  if (questionObj.type === "prompt") {
    userAnswer = prompt(questionObj.question);
  } else if (questionObj.type === "confirm") {
    userAnswer = confirm(questionObj.question);
  }
  return userAnswer;
}

let totalScore = 0;
for (let i = 0; i < questions.length; i++) {
  const userAnswer = askQuestion(questions[i]);

  if (userAnswer === questions[i].answer) {
    totalScore += 10;
  }
}

alert(`Your final score: ${totalScore}, congratulations!`);
