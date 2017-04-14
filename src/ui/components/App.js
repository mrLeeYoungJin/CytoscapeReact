import React from 'react';
import CytoscapeBody from './CytoscapeGraph'
import testdump from '../data/test/testdump'

class App extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		let graphObj = new GraphObj();
		let topoOption = new TopoOptions(graphObj.getLayoutOption());
		const topoClass = new TopoClass();

		var cy = cytoscape({
			container: document.getElementById('cy')
			, pan: { x: 0, y: 0 }

			// interaction options:
			, minZoom: 0.1
			, maxZoom: 3
			, userZoomingEnabled: true

			, style: cytoscape.stylesheet()
				.selector('node')
				.css(topoClass.getNodeClass())
			    .selector('edge')
			    .css(topoClass.getEdgeClass())
			    .selector(':selected')
			    .css(topoClass.getSelectClass())
			    .selector('.faded')
			    .css({
			        'opacity': 0.25,
			        'text-opacity': 0
			}),

			elements: dataElements,

			layout: {
			    name: 'preset'
			},

			ready: function(){
				window.cy = this;
			}
		});

		//dataElements.nodes.find(checkAdult);

		/*cy.zoom({
			level: 2.1 // the zoom level
			//, renderedPosition: { x: 0, y: 0 }
		});*/

		$("#nodeAdd").click(function() {
			graphObj.topoMenu(ctrlType.DeviceAdd);
		});
		$("#nodeDel").click(function() {
			graphObj.topoMenu(ctrlType.DeviceDel);
		});
		$("#EdgeAdd").click(function() {
			graphObj.topoMenu(ctrlType.EdgeAdd);
		});
		$("#EdgeDel").click(function() {
			graphObj.topoMenu(ctrlType.EdgeDel);
		});

		cy.on('tap', function(event) {
			var evtTarget = event.target;

			if( evtTarget === cy ){
				console.log('tap on background : ', evtTarget);
				cy.$(':selected').unselect();
				if(graphObj.getNSelDataFunc() != 0) graphObj.setNSelDataFunc(-1);
			} else {
				console.log('tap on some element : ', evtTarget);
				if(evtTarget.group() === "nodes") {
					graphObj.deviceInfoInIt(evtTarget.data())
				}
			}

			graphObj.dataSelFunc(graphObj.getNSelDataFunc(), event);
		});

		$("#upFeeder").click(function() {
			graphObj.upFeederCheck();
		});

		$("#downFeeder").click(function() {
			graphObj.downFeederCheck();
		});

		$("#upDownFeeder").click(function() {
			graphObj.upFeederCheck();
			graphObj.downFeederCheck();
		});

		graphObj.layOutPresetSet(cy.nodes());


		 /*cy.nodes().forEach(function(n){
			    var g = n.data('name');

			    console.log("====g : ", n);
			    n.qtip({
			      content: [
			        {
			          name: g,
			          url: 'http://www.genecards.org/cgi-bin/carddisp.pl?gene=' + g
			        }
			      ].map(function( link ){
			        return '<a target="_blank" href="' + link.url + '">' + link.name + '</a>';
			      }).join('<br />\n'),
			      position: {
			        my: 'bottom center',
			        at: 'top center'
			      },
			      style: {
			        classes: 'qtip-bootstrap',
			        tip: {
			          width: 16,
			          height: 8
			        }
			      }
			    });
			  });*/


		let mpc = -1;
		cy.on('mouseover', 'node', function (evt) {
			mpc = -1
	        $('html,body').css('cursor', 'pointer');
	    });
		cy.on('mouseout', 'node', function (evt) {
			mpc = -1
	        $('html,body').css('cursor', 'default');
	    });

		cy.on('mousedown', 'node', function (evt) {
			mpc = 0;
	    });

		cy.on('mousemove ', 'node', function (evt) {
			if(mpc === 0) mpc = 1;
	    });

		cy.on('mouseup', 'node', function (evt) {
			if(mpc === 1) alert(evt.target.data().deviceOriginId);

			mpc = -1;
	    });

		$('#config-toggle').on('click', function(){
			$('body').toggleClass('config-closed');
			cy.resize();
		});

		cy.nodes().forEach(function(n, i){
			//console.log("i : ", i);
			if(cy.nodes().length-1 === i) {
				n.style('background-color', 'blue')
			}
		});

		cy.layout(topoOption.getOption()).run();
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
