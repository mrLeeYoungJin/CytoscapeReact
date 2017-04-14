import React from 'react';
import {equipTypes} from '../data/test/testdump'

class DeviceEquipType extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			typeList : []
		};
		this.selectTypeList = this.selectTypeList.bind(this)
	}

	selectTypeList() {
		let listData = equipTypes;
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
    			<label htmlFor="Type">Equip Type</label>
    			<select className="form-control" id="Type">
      				<option>Equip Type</option>
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

export default DeviceEquipType;
