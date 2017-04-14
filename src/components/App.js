import React from 'react';
import CytoscapeBody from './CytoscapeGraph'
import testdump from '../data/test/testdump'

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
