var React = require('react');

var Teacher = React.createClass({

	getInitialState: function(){
		return {
				quiz1: 0,
				quiz2: 0,
				quiz3: 0,
				quiz4: 0
		}
	},

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

	scoreArr = this.props.scores;
	console.log("Teacher - scoreArr: ", scoreArr );

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
									<b>Quiz1 Score: {scoreArr[0] }</b>
									<br/>
									<b>Quiz2 Score: {scoreArr[1] }</b>
									<br/>
									<b>Quiz3 Score: {scoreArr[2] }</b>
									<br/>
									<br/>
									<button onClick={handleItemClick.bind(this, num, scoreArr )}>grade</button>
								</div>	
					})	
				}
			</div>
		);

		function handleItemClick (num, arr){
			console.log("nandleItemClick: ", arr );
			
			console.log("Grade our Student");
			var sum = arr.reduce((a, b) => a + b, 0);
			console.log(sum); // 6
			switch(sum) {
				case 0:
					alert ("Student One currently has an F average");
				break;
				case 1:
					alert ("Student One currently has a C average");
				break;
				case 2:
					alert ("Student One currently has an B average");
				break;
				case 3:
					alert ("Student One currently has an A average");
				break;
			}//end switch
	


		}//end handleItemClick
	}//end render
});//end Teacher

module.exports = Teacher;