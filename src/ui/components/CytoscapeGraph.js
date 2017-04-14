import React from 'react';

import dataElements from '../data/data2'
import base from '../js/base'
import cytoscape from 'cytoscape'
import lodash from 'lodash'

import {DeviceType, DeviceEquipType} from '../Containers'

//css import
import 'bootstrap/dist/css/bootstrap'
import 'bootstrap/dist/css/bootstrap-theme'
import 'font-awesome/css/font-awesome'
import '../styles/style'

let style1 = {
	'paddingLeft': '0px',
	'width': '16em'
}

let style2 = {
	'paddingBottom': '10px'		
}

const CytoscapeBody = () => (
		<div>
		<div id="cy"></div>
		<span className="fa fa-bars config-toggle" id="config-toggle"></span>
		<div id="config" className="config">
		<div className="preamble">
			<div className="container" style={style1}>
				<div className="btn-group btn-group-sm" style={style2}>
			    <button type="button" className="btn btn-info" id="nodeAdd">Node Add</button>
			    <button type="button" className="btn btn-info" id="nodeDel">Node Del</button>
			    <button type="button" className="btn btn-info" id="EdgeAdd">Edge Add</button>
			    <button type="button" className="btn btn-info" id="EdgeDel">Edge Del</button>
			</div>
			<div className="btn-group btn-group-sm">
			    <button type="button" className="btn btn-info" id="upFeeder">Up Feeder</button>
			    <button type="button" className="btn btn-info" id="downFeeder">Down Feeder</button>
			    <button type="button" className="btn btn-info" id="upDownFeeder">UpDown Feeder</button>
			</div>
			
			<h2>Node Info</h2>
			<form style={{"fontSize": "15px"}}>
		    <div className="form-group">
				<label htmlFor="DeviceOriginId">Device Id</label>
		      	<input type="text" className="form-control input-sm" id="DeviceOriginId" placeholder="Enter Device Id" />
		    </div>
		    <div className="form-group">
		      	<label htmlFor="Status">Status</label>
		      	<input type="text" className="form-control input-sm" id="Status" placeholder="Enter Status" />
		    </div>
		    
		    <div className="row">
		    	<div className="col-md-6">
	    			<DeviceType />
		    	</div>
		    	<div className="col-md-6">
		    		<DeviceEquipType />
		    	</div>
		    </div>
		    
		    <div className="form-group">
		      	<label htmlFor="BaseVoltVal">Base Voltage</label>
		      	<input type="text" className="form-control input-sm" id="BaseVoltVal" placeholder="Enter Base Voltage" />
		    </div>
		    <div className="form-group">
		      	<label htmlFor="CurVoltVal">Current Voltage</label>
		      	<input type="text" className="form-control input-sm" id="CurVoltVal" readOnly />
		    </div>
		</form>
  		</div>
  		</div>
  	</div>
  	</div>
	)
	
export default CytoscapeBody;	