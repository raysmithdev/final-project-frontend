import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// const Root = () => {
// 	return (
// 		<Router>
// 		<div className="App">
//         	<Route path='/' component={App} />
//       	</div>
// 		</Router>
// 	)
// }

ReactDOM.render((
		<Router>
        	<Route path='/' component={App} />
		</Router>
	), document.getElementById('root'));
registerServiceWorker();

