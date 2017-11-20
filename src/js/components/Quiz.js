var React = require('react');
var AppActions = require('../actions/AppActions');

var Quiz = React.createClass({
    getInitialState: function () {
            return {
                checked: false,
                currentQuiz: 0,
                finalAnswer: 0
            }
        },

	render: function() {
		 if (!this.props.visible) {
		 	console.log("Quiz is off");
          return false; 
	} 
    
    console.log("current question: ", this.props.questions );
    var questArr = [];
    //questArr = this.props.questions;

    var v1 = ["wrong","wrong","correct"];
    var v2 = ["wrong", "correct", "wrong"];
    var v3 = ["correct","wrong","wrong"];

    var q1 = "q1";
    var q2 = "q2";
    var q3 = "q3";

    var finalAnswer

		return (
			<div className='center option animated fadeIn'>
				<h1>Quiz Component</h1>
	
                    <br/><br/>
            1) {this.props.questions}<br/><br/>
                    <input id="quiz1" type="radio" name="myGroupName" onChange={checkSelected.bind(this)}>1812</input><br/>
                    <input id="quiz2" type="radio" name="myGroupName" onChange={checkSelected.bind(this)}>An infinite amount </input><br/>
                    <input id="quiz3" type="radio" name="myGroupName" onChange={checkSelected.bind(this)}>2 Pair of Pants </input>
                    <br/><br/>
                    			
                    <div className="buttons">
					    <button onClick={submitQuiz.bind(this, finalAnswer )}>Submit Quiz</button>
                    </div>
                </div>
            );
            
            function checkSelected (e, answer, quiz ){
                //cooper s - use jquery to open/close each items content....
                console.log("checkselected event target: ", e.target.id );
                console.log("checkSelected: ", answer );
                console.log("checkSelected which question: ", quiz);
                switch (quiz) {
                    case "q1":
                        quiz = 1;
                    break;
                    case "q2":
                        quiz = 2;
                    break;
                    case "q3":
                        quiz = 3;
                    break;
                }//end switch

                this.setState({
                    currentQuiz: quiz,
                    finalAnswer: answer
                });  

        }//end checkSelected

        function submitQuiz (answer, quiz ){
                console.log("Current Quiz: ", this.state.currentQuiz )
                console.log("The final answer: ", this.state.finalAnswer);
                //    var done = true;
                //    AppActions.showStudent();
                    
                    var result = this.state.finalAnswer;
                
                    if ( result === "wrong"){
                        console.log('submitQuiz - Our result is wrong');
                        result = "0";
                    } else {
                        console.log('submitQuiz - Our result is correct');
                        result = "1";
                    }

                    $("#quiz1").attr("display", "none")
                    AppActions.updateScores(result);

                    AppActions.showStudent();;
                }
    }//end render
    
});//end Quiz Component

module.exports = Quiz;