const p4Data = require('./p4-data.js');
console.log(p4Data); 

// Question and answer data array
const data = [
    {
      question: "Q1",
      answer: "A1",
    },
    {
      question: "Q2",
      answer: "A2",
    },
    {
      question: "Q3",
      answer: "A3",
    },
  ];
  
  // Export statement must be below data declaration - no hoisting with const
  module.exports = {
    data,
  };

  function getQuestions() {
    const questions = ['Q1', 'Q2', 'Q3'];
    return questions;
  }
  
  const questionsArray = getQuestions();
  console.log(questionsArray); 

  function getAnswers() {
    const answers = ['A1', 'A2', 'A3'];
    return answers;
  }
  
  const answersArray = getAnswers();
  console.log(answersArray); 

  function getQuestionsAnswers() {
    const originalData = [
        { question: 'Q1', answer: 'A1' },
        { question: 'Q2', answer: 'A2' },
        { question: 'Q3', answer: 'A3' }
      ];
      const clonedData = JSON.parse(JSON.stringify(originalData));
      return clonedData;
  }

  const questionsAnswersArray = getQuestionsAnswers();
  console.log(questionsAnswersArray);

  function getQuestion(number = "") {
    const result = {
      question: "",
      number: number,
      error: "",
    };
  
    if (number === "" || isNaN(number) || !Number.isInteger(Number(number))) {
      result.error = "Invalid number parameter";
      return result;
    }
  
    const questions = ["What is your name?", "What is your age?", "What is your favorite color?"];
    const index = Number(number) - 1; 
    if (index < 0 || index >= questions.length) {
      result.error = "Question not found";
      return result;
    }
    result.question = questions[index];
  
    return result;
  }

  function getQuestionAnswer(number = "") {
    const result = {
      question: "",
      answer: "",
      number: number,
      error: "",
    };
  
    if (number === "" || isNaN(number) || !Number.isInteger(Number(number))) {
      result.error = "Invalid number parameter";
      return result;
    }
  
    const questions = ["What is your name?", "What is your age?", "What is your favorite color?"];
    const answers = ["My name is John.", "I am 25 years old.", "My favorite color is blue."];
    const index = Number(number) - 1; // convert to zero-based index
    if (index < 0 || index >= questions.length) {
      result.error = "Question not found";
      return result;
    }
    result.question = questions[index];
    result.answer = answers[index];
  
    return result;
  }

  