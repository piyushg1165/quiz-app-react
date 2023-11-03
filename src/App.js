import './App.css';
import { useState } from 'react';
function App() {

  const [questionNumber , setQuestionNumber] = useState(0);
  const [score , setScore] = useState(0);
  const [showScore , setShowScore] = useState(false);


  const questions = [
    {
      questionText : "The iPhone was created by which company?" ,
      answerText : [
        { option : "Apple" , status : true},
        { option : "Microsoft" , status : false},
        { option : "Blackberry" , status : false},
        { option : "Nokia" , status : false}
      ]
    },
    {
      questionText : "Which of these programming languages is not object oriented ?" ,
      answerText : [
        { option : "C++" , status : false},
        { option : "C" , status : true},
        { option : "Python" , status : false},
        { option : "Java" , status : false}
      ]
    },
    {
      questionText : "What is the color of apple ?" ,
      answerText : [
        { option : "Blue" , status : false},
        { option : "Green" , status : false},
        { option : "Black" , status : false},
        { option : "Red" , status : true}
      ]
    },
    {
      questionText : "What is the color of hair ?" ,
      answerText : [
        { option : "Blue" , status : false},
        { option : "Green" , status : false},
        { option : "Black" , status : true},
        { option : "Red" , status : false}
      ]
    }
    
    
  ]

  const handleClick = (status) => {
    
    if (status) {
			setScore(score + 1);
		}

    const nextQuestion = questionNumber + 1;
		if (nextQuestion < questions.length) {
			setQuestionNumber(nextQuestion);
		} else {
			setShowScore(true);
		}
  };

  const newGame = () => {
    setShowScore(false);
    setQuestionNumber(0);
    setScore(0);
  }


  return (
    <div className="App bg-primary">
      <div className="container text-center">

        {showScore ? 
        (
          <div className='score-section'>
            <p className='fs-3'>You scored {score} out of {questions.length}</p>
            <button className='btn bg-light p-2 m-3 fs-3' onClick={newGame}>New Game</button>

            </div>
        
        
        )  : 
        (
          <div className="row align-items-center p-5">
          
          <div className="col p-3">
            <h1>{"Q: " + questionNumber + "/" + questions.length}</h1>
            <h3 className='fs-1'>{questions[questionNumber].questionText}</h3>
          </div>
          
          <div className="col flex-column p-3">
            {questions[questionNumber].answerText.map( (answerOption) => (<div><button className=" btn bg-light p-2 m-3 fs-3" onClick={ () => handleClick(answerOption.status)}>{answerOption.option}</button></div>) )}
          </div>
        
        </div>
        )
        }
        
        
        
      
      </div>
    </div>
  );
}

export default App;
