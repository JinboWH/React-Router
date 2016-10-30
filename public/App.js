import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router'
import { Router, Route, IndexRoute, Link } from 'react-router';

import Home from './Home';
import About from './About';
import Repos from './Repos';
import RepoDetails from './RepoDetails';

class App extends React.Component{
	

	render(){
		return(<div>
			<header>App</header>
				<menu>
					<ul>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/repos">Repos</Link></li>
					</ul>
				</menu>
				{this.props.children}
			</div>)
	}
}

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="about" component={About}/>
			<Route path="repos" component={Repos}>
				{/* Add the route, nested where we want the UI to nest */}
				<Route path="details/:repo_name" component={RepoDetails} />
			</Route>
		</Route>
	</Router>
	), document.getElementById('root'));