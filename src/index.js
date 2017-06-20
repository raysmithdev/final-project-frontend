import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Root = () => {
	return (
		<Router>
		<div className="App">
        	<Route path='/' component={App} />
      	</div>
		</Router>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
