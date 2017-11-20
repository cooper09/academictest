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

    var v1 = ["wrong","wrong","correct"];
    var v2 = ["wrong", "correct", "wrong"];
    var v3 = ["correct","wrong","wrong"];

    var q1 = "q1";
    var q2 = "q2";
    var q3 = "q3";

    var finalAnswer

		return (
			<div className='mainScrn center option animated fadeIn'>
				<h1>Quiz Component</h1>
	
                    <br/><br/>
            1) {this.props.questions}<br/><br/>
                    <input id="ans1" type="radio" name="myGroupName" onChange={checkSelected.bind(this)}>1812</input><br/>
                    <input id="ans2" type="radio" name="myGroupName" onChange={checkSelected.bind(this)}>An infinite amount </input><br/>
                    <input id="ans3" type="radio" name="myGroupName" onChange={checkSelected.bind(this)}>2 Pair of Pants </input>
                    <br/><br/>
                    			
                    <div className="buttons">
					    <button className="scrnBtn" onClick={submitQuiz.bind(this, finalAnswer )}>Submit Quiz</button>
                    </div>
                </div>
            );
            
            function checkSelected (e){
                //cooper s - use jquery to open/close each items content....
                console.log("checkselected event target: ", e.target.id );

                var currentAnswer = e.target.id;
                var quiz;

                switch (this.props.questions){
                    case 'What has four legs and flies?':
                        console.log("Check answer for question 1");
                        currentQuiz = 1;
                        if ( currentAnswer === 'ans3'){
                            answer = "correct";
                        } else {
                            answer = "wrong";
                        }
                        
                    break;
                    case 'How many angels can dance on the head of a pin?':
                        currentQuiz = 2;
                        console.log("Check answer for question 2");
                        if ( currentAnswer === 'ans2'){
                            answer = "correct";
                        } else {
                            answer = "wrong";
                        }
                    break;
                    case 'When was the war of 1812?':
                        currentQuiz = 3
                        console.log("Check answer for question 3");
                        if ( currentAnswer === 'ans1'){
                            answer = "correct";
                        } else {
                            answer = "wrong";
                        }
                    break;
                }//end switch

               
                this.setState({
                    currentQuiz: currentQuiz,
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

                    var resultObj = {
                        quiz: this.state.currentQuiz,
                        result: result
                    }
                    //$("#quiz1").attr("display", "none")
                    AppActions.updateScores(resultObj);

                    //disable selected quiz

                    AppActions.showStudent();
                }
    }//end render
    
});//end Quiz Component

module.exports = Quiz;