
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

const myQuestions = [
  {
    question: "Which of the following statement is TRUE",
    answers: {
      a: "fly ball tilts towards the governor axis at minimum position",
      b: "The fly ball tilts away from the governor axis at maximum position",
      c: "All of the above",
      d: "None of the above"
    },
    correctAnswer: "c"
  },

  {
    question: "In a spring-controlled governor, the curve of controlling force is a straight line. When balls are 35cm apart the controlling force is 1100N and when 20cm apart it is 550N. To make the governor isochronous, the required initial tension on the spring would be _____ N.",
    answers: {
      a:  "91.25",
      b:  "183.5",
      c:  "200",
      d:  "136.5"
    },
    correctAnswer: "b"
  },

  {
    question: "The total sleeve movement in a Hartnell governor is 3cm. The mass of rotating balls is 1.5kg each. At the mid position of the sleeve arm, which is 6.5cm long, is horizontal. The ball arm has a length of 7.5cm. At the mid position of the sleeve, the ball rotates at a radius of 10.5cm. Due to the maladjustment of spring, the equilibrium speed of governor at top position is 415rpm and in the lowest position, it is 430rpm. The stiffness of the spring will be __________",
    answers: {
      a: "6135",
      b: "3500",
      c: "78.32",
      d: "800"
    },
    correctAnswer: "a"
  },
  {
    question: "The sensitiveness of a Governor is<br>Where N1=Minimum equilibrium speed<br>N2=Maximum equilibrium speed<br>N=Mean speed",
    answers: {
      a: "(N<sub>2</sub>+N<sub>1</sub>)/N",
      b: "(N<sub>2</sub>-N<sub>1</sub>)/N",
      c: "(N<sub>2</sub>+N<sub>1</sub>)* N",
      d: "(N<sub>2</sub>-N<sub>1</sub>)* N"
    },
    correctAnswer: "b"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
