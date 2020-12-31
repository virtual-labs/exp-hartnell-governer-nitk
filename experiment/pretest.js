
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
    question: "For a given fractional change of speed, if the displacement of the sleeve is high, then the governor is said to be",
    answers: {
      a: "hunting",
      b: "isochronous",
      c: "sensitive",
      d: "stable"
    },
    correctAnswer: "c"
  },

  {
    question: "Power of a governor is the",
    answers: {
      a:  "mean force exerted at the sleeve for a given percentage change of speed",
      b:  "work done at the sleeve for maximum equilibrium speed",
      c:  "means force exerted at the sleeve for maximum equilibrium speed",
      d:  "none of the mentioned"
    },
    correctAnswer: "d"
  },

  {
    question: "The controlling force diagram for a spring-controlled governor is",
    answers: {
      a: "Not continuous",
      b: "Curve",
      c: "Straight line",
      d: "None of these"
    },
    correctAnswer: "c"
  },
  {
    question: "A spring controlled governor is said to be unstable when the controlling force",
    answers: {
      a: "increases as the radius of rotation decreases",
      b: "decreases as the radius of rotation decreases",
      c: "increases as the radius of rotation increases",
      d: "remains constant for all radii of rotation"
    },
    correctAnswer: "b"
  },
  {
    question: "In a spring-controlled governor, when the controlling force _____________ as the radius of rotation increases, it is said to be a stable governor.",
    answers: {
      a: "remains constant",
      b: "decreases",
      c: "increases",
      d: "none of the mentioned"
    },
    correctAnswer: "c"
  },
  {
    question: "A spring controlled governor is said to be isochronous when the controlling force",
    answers: {
      a: "increases as the radius of rotation decreases",
      b: "increases as the radius of rotation increases",
      c: "decreases as the radius of rotation decreases",
      d: "remains constant for all radii of rotation"
    },
    correctAnswer: "d"
  },
  {
    question: "A spring controlled governor is found unstable. It can be made stable by",
    answers: {
      a: "increasing the spring stiffness",
      b: "decreasing the spring stiffness",
      c: "increasing the ball mass",
      d: "decreasing the ball mass"
    },
    correctAnswer: "b"
  },
  {
    question: "A Hartnell governor is a governor of the",
    answers: {
      a: "inertia type",
      b: "pendulum type",
      c: "spring-controlled type",
      d: "dead weight type"
    },
    correctAnswer: "c"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
