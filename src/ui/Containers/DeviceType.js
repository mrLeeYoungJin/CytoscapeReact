import React from 'react';
import {types} from '../data/test/testdump'

class DeviceType extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			typeList : []
		};
		this.selectTypeList = this.selectTypeList.bind(this)
	}

	selectTypeList() {
		console.log("====types : ", types)
		let listData = types;
		this.setState({
			typeList : listData
		});
	}

	componentWillMount(){}

	componentDidMount() {
		this.selectTypeList();
	}

	render() {
		return (
			<div className="form-group" >
				<label htmlFor="Type">Type</label>
				<select className="form-control" id="Type">
	  				<option>Type</option>
	  				{this.state.typeList.map((item) =>
		  			<option value={item.code} key={item.value}>
		  				{item.value}
		  			</option>
	  				)}
				</select>
	    	</div>
		);
	}
}

export default DeviceType;
