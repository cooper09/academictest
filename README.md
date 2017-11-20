# simple reactjs "quizzer"

Simple "first-go" demo

Includes node packages (work with most Node versions up to 8.1.4) 

To build > "npm install"

To run > "gulp"

This will use browserfy to build a working version in the "dist" folder. All source java script and css is, of course, under "src"

An added little feature is the use of sass to create the css, so be sure to install sass and compass if you really want to blow the styling up and make it responsive using your own custom grid. If not, you can just add whatever css framework you like (bootstrap, foundation, whatever.. )

Data comes from local storage, but can be loaded just as easily from an API. 

The architecture is simple. The Teacher, Student and Quiz objects are represented as Component classes. The dynamic data elements are represented via state variables, questions, scores, etc., along with when a component is displayed and when its not. Since this is a quickie, the framework is complete but the app only has 3 quizzes with 3 possible answers. The "Student" either passes (1) or fails (0) with each submission and the "Teacher" grades the combined submissions accordingly. 

The app allows you to be both the Teacher and Student. 

ToDo: 

1) allow teacher to "create" quizzes with multiple questions.
2) allow each quizzes to have discrete answers to each quiz.
3) prevent the student from completing any quiz more than once. 

If you like I can add these features, but this should be enough to demonstrate my understanding of OOP, particularly using ReactJS. You can follow the commits to see how the logic comes together as I went along.

If you have any questions or want to make any contributions, just let me know.

Enjoy!!