var questionsAttempted = 0;
var questionsCorrect = 0;
let w = "n";
const updateTally = () => {
  let total = document.querySelector(".totalAttempted");
  let correct = document.querySelector(".correctTotal");
  total.innerText = questionsAttempted;
  correct.innerText = questionsCorrect;
  checkIfDone();
};
class Question {
  constructor(questionText, correctAnswer, explanation, buttonsData) {
    this.questionText = questionText;
    this.correctAnswer = correctAnswer;
    this.explanation = explanation;
    this.final = false;
    this.buttonsData = buttonsData;
    this.element = this.createElement();
  }

  buttonClickHandler = (e) => {
    if (!this.final) {
      questionsAttempted += 1;
      let explanation = this.element.querySelector(".explanation");
      if (e.target.id === this.correctAnswer) {
        e.target.classList.add("correct");
        explanation.innerHTML = `&#10004;     ${this.explanation}`;
        explanation.classList.add("correct");
        this.element.classList.add("correct");
        questionsCorrect += 1;
      } else {
        e.target.classList.add("incorrect");
        this.element
          .querySelector(`#${this.correctAnswer}`)
          .classList.add("correct");
        this.element.classList.add("incorrect");
        explanation.innerHTML = `&#10005;     ${this.explanation}`;
        explanation.classList.add("incorrect");
      }
    }
    this.final = true;
    updateTally();
  };
  getElement = () => {
    return this.element;
  };

  createElement = () => {
    const wrapper = document.createElement("div");
    const text = document.createElement("pre");

    const buttonContainer = document.createElement("div");
    const explanation = document.createElement("p");

    wrapper.classList.add("question");

    text.classList.add("text");
    text.innerText = this.questionText;

    buttonContainer.classList.add("button-container");
    this.buttonsData.forEach((buttonData) => {
      let button = document.createElement("div");
      button.classList.add("choice");
      button.id = buttonData.id;
      button.addEventListener("click", this.buttonClickHandler);
      button.innerText = buttonData.text;
      buttonContainer.appendChild(button);
    });
    explanation.classList.add("explanation");
    wrapper.appendChild(text);
    wrapper.appendChild(buttonContainer);
    wrapper.appendChild(explanation);
    return wrapper;
  };
}
const r = "ui";
class TrueOrFalseQuestion extends Question {
  constructor(questionText, correctAnswer, explanation) {
    const buttons = [
      { text: "True", id: "true" },
      { text: "False", id: "false" },
    ];
    super(questionText, correctAnswer, explanation, buttons);
  }
}

var a = "s";

const conditionalQuestions = [
  new Question(
    `
let sample = 0;
if(true){
  sample = 10;
}`,
    "ten",
    "Because the statement evaluates to true, the inner-code is run, and sample is re-assigned to the number 10",
    [
      { text: "0", id: "zero" },
      { text: "10", id: "ten" },
      { text: "error", id: "error" },
    ]
  ),
  new Question(
    `
let sample = 0;
if(false){
  sample = 10;
}`,
    "zero",
    "Because the statement evaluates to false, the inner-code is not run, and sample remains assigned to the number 0",
    [
      { text: "0", id: "zero" },
      { text: "10", id: "ten" },
      { text: "error", id: "error" },
    ]
  ),
  new Question(
    `
let sample = 0;
if(10 < 20){
  sample = 10;
}`,
    "ten",
    "Because the statement evaluates to true, the inner-code is run, and sample is re-assigned to the number 10",
    [
      { text: "0", id: "zero" },
      { text: "10", id: "ten" },
      { text: "error", id: "error" },
    ]
  ),
  new Question(
    `
let sample = 0;
if(true === !false){
  sample = 10;
}`,
    "ten",
    "Because the statement evaluates to true, the inner-code is run, and sample is re-assigned to the number 10",
    [
      { text: "0", id: "zero" },
      { text: "10", id: "ten" },
      { text: "error", id: "error" },
    ]
  ),
  new Question(
    `
let sample = 0;
if(1 * 30 < 30){
  sample = 10;
}`,
    "zero",
    "Because the statement evaluates to false, the inner-code is not run, and sample remains assigned to the number 0",
    [
      { text: "0", id: "zero" },
      { text: "10", id: "ten" },
      { text: "error", id: "error" },
    ]
  ),
  new Question(
    `
let sample = 0;
if(!true){
  sample = 10;
}`,
    "zero",
    "Because the statement evaluates to false, the inner-code is not run, and sample remains assigned to the number 0",
    [
      { text: "0", id: "zero" },
      { text: "10", id: "ten" },
      { text: "error", id: "error" },
    ]
  ),
  new Question(
    `
let sample;
let grade = 78;
if(grade >= 90){
  sample = "Pass";
} else {
  sample = "Try Again";
}`,
    "try",
    "Because the first statement is false, that code is skipped. The next statement is true, so that code is run.",
    [
      { text: "Pass", id: "pass" },
      { text: "Try Again", id: "try" },
      { text: "error", id: "error" },
    ]
  ),
  new Question(
    `
let sample = "Just Born";
let age = 18;
if(age >= 16){
  sample = "Can Have Drivers License";
} else if (age === 15){
  sample = "Can Have Permit";
} else {
  sample = "Not Old Enough";
}`,
    "license",
    "Each statement is run until one evaluates to true. In this case it was the first statement. All others are skipped",
    [
      { text: "Can Have Drivers License", id: "license" },
      { text: "Can Have Permit", id: "permit" },
      { text: "Not Old Enough", id: "no" },
      { text: "Just Born", id: "born" },
    ]
  ),
  new Question(
    `
let sample = "Just Born";
let dogAge = 7;
if(dogAge * 7 > 80){
  sample = "Old Dog";
} else if (dogAge * 7 > 35){
  sample = "Middle Aged Dog";
} else if (dogAge * 7 > 5){
  sample = "Young Dog";
}`,
    "middle",
    "Each statement is run until one evaluates to true. In this case it was the second statement",
    [
      { text: "Old Dog", id: "old" },
      { text: "Middle Aged Dog", id: "middle" },
      { text: "Young Dog", id: "young" },
      { text: "Just Born", id: "born" },
    ]
  ),
  new Question(
    `
let sample = "Just Born";
let dogAge = 0.5;
if(dogAge * 7 > 80){
  sample = "Old Dog";
} else if (dogAge * 7 > 35){
  sample = "Middle Aged Dog";
} else if (dogAge * 7 > 5){
  sample = "Young Dog";
}`,
    "born",
    "Because none of the statements are true, none of their code blocks are run. sample remains unchanged.",
    [
      { text: "Old Dog", id: "old" },
      { text: "Middle Aged Dog", id: "middle" },
      { text: "Young Dog", id: "young" },
      { text: "Just Born", id: "born" },
    ]
  ),
  new Question(
    `
let sample = "Just Born";
let dogAge = 0.5;
if(dogAge * 7 > 80){
  sample = "Old Dog";
} else if (dogAge * 7 > 35){
  sample = "Middle Aged Dog";
} else if (dogAge * 7 > 5){
  sample = "Young Dog";
} else {
  sample = "Very Young Dog";
}`,
    "vyoung",
    "Because none of the statements are true, none of their code blocks are run. There is however a catch-all else statement, so this statement is run.",
    [
      { text: "Old Dog", id: "old" },
      { text: "Middle Aged Dog", id: "middle" },
      { text: "Young Dog", id: "young" },
      { text: "Very Young Dog", id: "vyoung" },
      { text: "Just Born", id: "born" },
    ]
  ),
];

let p = "Pa";
const forLoopQuestions = [
  new Question(
    `
let sample = 0;

for(let i = 1; i <= 5; i++ ){
  sample += 1;
}`,
    "five",
    "The loop runs five times, each time one is added to sample.",
    [
      { text: "0", id: "zero" },
      { text: "1", id: "one" },
      { text: "2", id: "two" },
      { text: "3", id: "three" },
      { text: "4", id: "four" },
      { text: "5", id: "five" },
      { text: "Error", id: "error" },
    ]
  ),
  new Question(
    `
let sample = "a";

for(let i = 1; i <= 3; i++ ){
  sample = sample + "a";
}`,
    "two",
    "The loop runs three times, each time 'a' is added to sample.",
    [
      { text: "a", id: "zero" },
      { text: "aa", id: "one" },
      { text: "aaa", id: "two" },
      { text: "aaaa", id: "three" },
      { text: "aaaaa", id: "four" },
      { text: "aaaaaa", id: "five" },
      { text: "Error", id: "error" },
    ]
  ),
  new Question(
    `
let sample = 0;

for(let i = 1; i < 1; i++ ){
  sample += 100;
}`,
    "zero",
    "The loop runs three times, each time 'a' is added to sample.",
    [
      { text: "0", id: "zero" },
      { text: "100", id: "one" },
      { text: "200", id: "two" },
      { text: "300", id: "three" },
      { text: "400", id: "four" },
      { text: "500", id: "five" },
      { text: "Error", id: "error" },
    ]
  ),
  new Question(
    `
let sample = 0;

for(let i = 1; i >= 1; i++ ){
  sample += 100;
}`,
    "error",
    "We've asked the loop to stop when it is no longer greater than 1. Because we add 1 each time, it will never stop. This is called an infinite loop and will (hopefully) result in an error.",
    [
      { text: "0", id: "zero" },
      { text: "100", id: "one" },
      { text: "200", id: "two" },
      { text: "300", id: "three" },
      { text: "400", id: "four" },
      { text: "500", id: "five" },
      { text: "Error", id: "error" },
    ]
  ),
];
const ss = "sio";
const trueOrFalseQuestionsArray = [
  new TrueOrFalseQuestion("1 === 1", "true", "1 does in fact equal 1"),
  new TrueOrFalseQuestion("1 < 10", "true", "One is less than 10"),
  new TrueOrFalseQuestion(
    "10 <= 10",
    "true",
    "10 is equal to 10, so it is true that 10 is less than OR equal to 10"
  ),
  new TrueOrFalseQuestion(
    "100 > 200 - 100 + 2",
    "false",
    "Evaluate the math on the left side first. You will get the expression 100 > 102. This is not true/"
  ),
  new TrueOrFalseQuestion("true === true", "true", "True is equal to true"),
  new TrueOrFalseQuestion(
    '"Lambda" === "Lambda"',
    "true",
    "The two string are equal to each other."
  ),
  new TrueOrFalseQuestion(
    '"12" === 12',
    "false",
    "Because one side is a String and the other is a Number, they are not equal."
  ),
  new TrueOrFalseQuestion(
    '"Lambda" === "lambda"',
    "false",
    "Strings must contain the exact characters to be equal. The left has an uppercase L and the right has a lowercase l"
  ),
  new TrueOrFalseQuestion(
    "7 * 10 === 35 + 35",
    "true",
    "Evaluate both mathematic expressions before you evaluate the equality. 70 === 70"
  ),
  new TrueOrFalseQuestion(
    "!true === !true",
    "true",
    "Both sides equal false, but they are equal to each other."
  ),
  new TrueOrFalseQuestion(
    `true === "true"`,
    "false",
    "THe left side is a Boolean and the right side is a String"
  ),
  new TrueOrFalseQuestion(
    '10 + 35 === "45"',
    "false",
    "The left side is a Number and the right is a String."
  ),
  new TrueOrFalseQuestion(
    "The loop: for(let i = 1; i < 10; i++) will run 10 times",
    "false",
    "When i === 10, it will stop the loop because i is no longer less than 10. This means the loop will run 9 times."
  ),
  new TrueOrFalseQuestion(
    "The 'for' loop is the only loop in Javascript",
    "false",
    "There is other loop syntax in Javascript such as the 'while' loop."
  ),

  new TrueOrFalseQuestion(
    `The correct pattern for writing a standard for loop statement is: 
    for(initialize variable, set conditional statement, iterate on variable)`,
    "true",
    "That is correct. It is a bit tricky at first, but with plenty of practice you will get the hang of it. "
  ),
];
let d = "t";
trueOrFalseQuestionsArray.forEach((question) => {
  document.querySelector("#tf-questions").appendChild(question.getElement());
});
conditionalQuestions.forEach((question) => {
  document
    .querySelector("#conditional-questions")
    .appendChild(question.getElement());
});
let o = "fr";
forLoopQuestions.forEach((question) => {
  document.querySelector("#loop-questions").appendChild(question.getElement());
});

function checkIfDone() {
  if (questionsAttempted === 30) {
    if (questionsCorrect > 27) {
      let password = document.querySelector(".passwordContainer");
      let passwordSpan = document.createElement("span");
      password.innerText = "The Password: ";
      passwordSpan.innerText = `${p}${a}${ss}${w}${o}${r}${d}`;
      password.appendChild(passwordSpan);
      alert(
        "Congratulations, you have completed the exercise. Find your password at the bottom right side of the screen."
      );
    } else {
      alert(
        "You Have Completed the quiz, but you did not pass. Read the explanations on the questions your got wrong, hit Refresh on your browser, and try again!"
      );
    }
  }
}
