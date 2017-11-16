var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');

var AppData = require('./AppData.js');
var AppAPI = require('./utils/appAPI');

AppData.init();
AppAPI.getData();

ReactDOM.render(
	<App />,
	document.getElementById('app')
);