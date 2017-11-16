var React = require('react');

var Teacher = React.createClass({

	doSomething: function (){
		console.log("Do Something!!!");
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("Teacher is off");
          return false; 
	} 

	console.log("Teachers = current data: ", this.props.data );
	var studentArr = [];
	studentArr = this.props.data;

	var subjectArr = [];
	subjectArr = studentArr[0].subjects;

	console.log('quiz result: ', subjectArr[0].Math[1].quiz2 );
	console.log('subjectArr: ', subjectArr[0].Math );

	var quizArr = [];
	mathArr = subjectArr[0];

	console.log('mathArr: ', mathArr );

	quizArr = mathArr[0];
	console.log('quizArr: ', quizArr );

	var num=0;
		
		return (
			<div className='center option animated fadeIn'>
				<h1>Teacher Component</h1>
				{
					studentArr.map(function(studentArr){
						++num;
						return <div key={num}>
									<b>Math</b>
									<br/><br/>
									<b>{studentArr.name}</b>
									<br/><br />
									<b>Quiz1 Score: {subjectArr[0].Math[0].quiz1 }</b>
									<br/>
									<b>Quiz2 Score: {subjectArr[0].Math[1].quiz2 }</b>
									<br/>
									<b>Quiz3 Score: {subjectArr[0].Math[2].quiz3 }</b>
									<br/>
									<b>Quiz4 Score: {subjectArr[0].Math[3].quiz4 }</b>
									<br/><br/>
									<button onClick={handleItemClick.bind(this, num, quizArr )}>grade</button>
								</div>	
					})	
				}
			</div>
		);

		function handleItemClick (num, arr){
			console.log("nandleItemClick: ", arr );
			
			console.log("Grade our Student");
			

		}//end handleItemClick
	}//end render
});//end Teacher

module.exports = Teacher;