import React,{Component } from 'react';
import { Link } from 'react-router';
import 'whatwg-fetch';

const url = 'https://api.github.com/users/pro-react/repos';

class Repos extends Component{
	constructor(){
		super();

		this.state = {
			repositories : []
		};
	}

	componentDidMount(){
		fetch(url)
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({repositories:responseData});
			
		});

		console.log(this.state);
	}

	render(){
		let repos = this.state.repositories.map(repo => (
			<li key={repo.id}>
				<Link to={"/repos/details/" + repo.name}>{repo.name}</Link>
			</li>
		));
	

		return <div>
			   	<h1>Github Repos</h1>
				<ul>{repos}</ul>
				{this.props.children}
			   	</div>;
	}
}

export default Repos;