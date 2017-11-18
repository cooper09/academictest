var React = require('react');

var Quiz = React.createClass({

	doSomething: function (){
		console.log("Do Something!!!");
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("Quiz is off");
          return false; 
	} 
    
    console.log("current quetions: ", this.props.questions );

		return (
			<div className='center option animated fadeIn'>
				<h1>Quiz Component</h1>
				<input type = "text" value = {this.props.questions}  onChange = {this.doSomething} />

                <form>
                    <input onChange={this.handleFruitChange} type="checkbox" name="fruit" value="apple" />Apple
                    <input onChange={this.handleFruitChange} type="checkbox" name="fruit" value="orange" />Orange
                    <input onChange={this.handleFruitChange} type="checkbox" name="fruit" value="watermelon" />Watermelon
                </form>

               <form onSubmit={this.doSomething}>
                    {this.props.questions} 
                        <button type="submit">Submit</button>
                    </form>
            

			</div>
			);
	}//end render
});//end Quiz Component

module.exports = Quiz;