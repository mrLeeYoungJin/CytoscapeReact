import React from 'react';
import CytoscapeBody from './CytoscapeGraph'

class App extends React.Component {
	constructor(props){
		super(props);
	}
	 
	componentWillMount(){
	}
	 
	componentDidMount() {
	}

	render() {
		return (
				<div>
					<CytoscapeBody />
	    	    </div>
		);
	}
}
 
export default App;