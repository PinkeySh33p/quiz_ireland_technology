
// Definicja pytań
const questions = [
    {
      id: 1,
      question: "What was the biggest change to everyday life in Ireland in the 1920s?",
      answers: {
        a: "The arrival of the first computer",
        b: "The connection to the internet",
        c: "The arrival of electricity",
        d: "The development of the smartphone",
      },
      correctAnswer: "c",
      explanation: "Another big change came in the 1920s when electricity arrived in Ireland. This might seem normal today, but it was a huge deal! Almost all homes in Ireland (99%) were connected to electricity by 1979. This completely changed life in Ireland, bringing light and power where there once was darkness."
    },
    {
      id: 2,
      question: "What is one reason why big international companies like Apple and Google set up offices in Ireland?",
      answers: {
        a: "Ireland has a well-educated workforce that speaks English.",
        b: "Ireland is a popular tourist destination.",
        c: "Ireland has a lot of natural resources.",
        d: "Ireland has strict laws on data privacy.",
      },
      correctAnswer: "a",
      explanation: "But in the 1950s, the government changed its policy and made it easier for these companies to set up business there. Ireland has a well-educated workforce that speaks English, which is a big advantage. This makes Ireland a very attractive place for companies, especially American ones."
    },
    {
      id: 3,
      question: "When did the first ever message sent across the Atlantic Ocean by cable travel from Ireland?",
      answers: {
        a: "1920s",
        b: "1960s",
        c: "1866",
        d: "2008",
      },
      correctAnswer: "c",
      explanation: "Believe it or not, Ireland played a part in a major tech achievement way back in 1866. The first ever message sent across the Atlantic Ocean by cable went from Ireland to America! This cable connected Valentia Island in Ireland to Newfoundland in America and stretched over 1,600 miles!"
    },
    {
      id: 4,
      question: "What kind of appliance made housework much easier in Ireland in the 1960s?",
      answers: {
        a: "Smartphone",
        b: "Washing machine",
        c: "Computer",
        d: "Television",
      },
      correctAnswer: "b",
      explanation: "Life at home changed a lot in the 1960s with the arrival of new appliances. Electric cookers, dishwashers and washing machines made housework much easier. These days we take them for granted, but they were a big deal back then!"
    },
    {
      id: 5,
      question: "What is the main idea of the passage?",
      answers: {
        a: "Ireland is a beautiful country with a rich history.",
        b: "Ireland is a leader in education and scientific research.",
        c: "Ireland has become a center for technology in Europe.",
        d: "Ireland is a popular destination for people who want to emigrate.",
      },
      correctAnswer: "c",
      explanation: "The passage chronicles Ireland's journey, from a pre-electricity nation to a hub for tech companies like Google and Apple. This rise is fueled by a skilled workforce and positions Ireland at the forefront of the digital age."
    },
  ];
  
  // Funkcja wyświetlająca quiz
  function showQuiz(x) {
    const quizElement = document.getElementById("quiz");
  
    // Wyświetlanie pytań
    for (const question of x) {
      quizElement.innerHTML += `
        <h3><span>${question.question}</span></h3>
        <ul>
            <li><input type="radio" name="${question.question}" value="a" /> <span>${question.answers.a}</span></li>
            <li><input type="radio" name="${question.question}" value="b" /> <span>${question.answers.b}</span></li>
            <li><input type="radio" name="${question.question}" value="c" /> <span>${question.answers.c}</span></li>
            <li><input type="radio" name="${question.question}" value="d" /> <span>${question.answers.d}</span></li>
        </ul>
      `;
    }
  
    // Dodanie przycisku do sprawdzania odpowiedzi
    quizElement.innerHTML += `<br/><button onclick="checkAnswers(questions)">Check answers</button>`;
  }
  
  // Funkcja sprawdzająca odpowiedzi
  function checkAnswers(x) {
    let correctAnswersCount = 0;
  
    // Przejście przez wszystkie pytania
    for (const question of x) {
      const checkedAnswer = document.querySelector(`input[name="${question.question}"]:checked`);

      //   Sprawdzenie poprawności odpowiedzi i wyświetlenie wyjaśnień poprawnych odpowiedzi
      if (checkedAnswer.value == question.correctAnswer) {
        correctAnswersCount++;

        document.getElementById("quizResult").innerHTML += `<p class="explanation">Question ${question.id}. - ${question.correctAnswer} - explanation: ${question.explanation}</p>`;


        
      }
    }
  
    // Wyświetlenie wyników
    document.getElementById("quizResult").innerHTML += `<h4 class="result">You've got ${correctAnswersCount} out of ${x.length} correct answers.</h4>`;


  }
  

  // Wyświetlenie quizu
  showQuiz(questions);