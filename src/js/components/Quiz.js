var React = require('react');
var AppActions = require('../actions/AppActions');

var Quiz = React.createClass({
    getInitialState: function () {
            return {
                finalAnswer: 0
            }
        },

	render: function() {
		 if (!this.props.visible) {
		 	console.log("Quiz is off");
          return false; 
	} 
    
    console.log("current quetions: ", this.props.questions );
    var questArr = [];
    questArr = this.props.questions;

    var v1 = "wrong";
    var v2 = "wrong";
    var v3 = "correct";

    var finalAnswer

		return (
			<div className='center option animated fadeIn'>
				<h1>Quiz Component 3</h1>
	
                    <br/><br/>
            1) {this.props.questions}<br/><br/>
                    <input type="radio" name="myGroupName" onChange={checkSelected.bind(this, v1 )}>1812</input><br/>
                    <input type="radio" name="myGroupName" onChange={checkSelected.bind(this, v2 )}>An infinite amount </input><br/>
                    <input type="radio" name="myGroupName" onChange={checkSelected.bind(this, v3 )}>2 Pair of Pants </input>
                    <br/><br/>
                    			
                    <div className="buttons">
					    <button onClick={submitQuiz.bind(this, finalAnswer )}>Submit Quiz</button>
                    </div>
                </div>
            );
            
            function checkSelected (answer){
				//cooper s - use jquery to open/close each items content....
                console.log("checkSelected: ", answer );
                this.setState({
                    finalAnswer: answer
                });  

        }//end checkSelected

        function submitQuiz (answer){
                console.log("The final answer: ", this.state.finalAnswer);
                    //var answer = $('input:radio[name=fruit]:nth(0)').attr('checked',true);
                //    var done = true;
                //    AppActions.showStudent(done);
                    
                    var result = this.state.finalAnswer;
                
                    if ( result === "wrong"){
                        console.log('submitQuiz - Our result is wrong');
                        result = "0";
                    } else {
                        console.log('submitQuiz - Our result is correct');
                        result = "1";
                    }
                    //this.props.scores = "1";

                    AppActions.showTeacher(result );
                }
    }//end render
    
});//end Quiz Component

module.exports = Quiz;