'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Title = require('./Components/Title');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*var Title = React.createClass({
	render: function() {
		return (
			<div>
				<h1>{this.props.text}</h1>
				<h2>Author</h2>
			</div>
		)
	}
});*/

(0, _reactDom.render)(_react2.default.createElement(_Title.Title, { text: "hello2" }), content); /*
                                                                                                 ReactDOM.render(
                                                                                                 	<h1>Hello</h1>,
                                                                                                 	document.getElementById('content')
                                                                                                 );
                                                                                                 */
//# sourceMappingURL=app.js.map
