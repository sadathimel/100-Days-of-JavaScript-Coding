const quizData = [
  {
    question: "How old is Florin?",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c",
  },
  {
    question: "What is the most used programmig language in 2021?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the president of US?",
    a: "Java",
    b: "Florin Pop",
    c: "Obama",
    d: "Donald Trump",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading style Sheet",
    c: "Jason Object Notation",
    d: "Helicapters Terminals Motorboats Lamborgiris",
    correct: "a",
  },
  {
    question: "What year was javascript launched?",
    a: "2020",
    b: "1770",
    c: "2010",
    d: "none of the above",
    correct: "d",
  },
];



const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}
submitBtn