import React from 'react';
import ReactDOM from 'react-dom';

const MyPorty = React.createClass({
	render: function(){
		console.log('whoa!')
		return <div>
			
		</div>
	}
})

console.log('whyyyyy', React)
ReactDOM.render(<MyPorty/>, document.querySelector('#app-container'))
