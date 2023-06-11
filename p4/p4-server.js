const fastify = require('fastify');
const app = fastify();
const p4Module = require('./p4-module.js');

app.get('/cit/question', (req, res) => {
  const questions = p4Module.getQuestions();
  const response = {
    error: "",
    statusCode: 200,
    questions: questions,
  };
  res.json(response);
});

app.get('/cit/answer', (req, res) => {
  const answers = p4Module.getAnswers();
  const response = {
    error: "",
    statusCode: 200,
    answers: answers,
  };
  res.json(response);
});

app.get('/cit/questionanswer', (req, res) => {
  const questionsAnswers = p4Module.getQuestionsAnswers();
  const response = {
    error: "",
    statusCode: 200,
    questions_answers: questionsAnswers,
  };
  res.json(response);
});

app.get('/cit/question/:number', (req, res) => {
  const number = req.params.number;
  const result = p4Module.getQuestion(number);
  const response = {
    error: result.error,
    statusCode: result.error ? 404 : 200,
    question: result.question,
    number: result.number,
  };
  res.json(response);
});

app.get('/cit/answer/:number', (req, res) => {
  const number = req.params.number;
  const result = p4Module.getAnswer(number);
  const response = {
    error: result.error,
    statusCode: result.error ? 404 : 200,
    answer: result.answer,
    number: result.number,
  };
  res.json(response);
});

app.get('/cit/questionanswer/:number', (req, res) => {
  const number = req.params.number;
  const result = p4Module.getQuestionAnswer(number);
  const response = {
    error: result.error,
    statusCode: result.error ? 404 : 200,
    question: result.question,
    answer: result.answer,
    number: result.number,
  };
  res.json(response);
});

app.get('*', (req, res) => {
  const response = {
    error: "Route not found",
    statusCode: 404,
  };
  res.status(404).json(response);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});