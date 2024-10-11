import React from 'react';

function MainContent(props) {
	return (
		<div className="content">
			<h5>Control Center</h5>
			<div className="buttonControls">
				<button onClick={props.onRemoveTwo}>-2</button>
				<button onClick={props.onRemoveOne}>-1</button>
        		<button onClick={props.onReset}>Reset</button>
        		<button onClick={props.onAddOne}>+1</button>
        		<button onClick={props.onAddTwo}>+2</button>
        		
			</div>

			<div className="buttonClear">
				<button onClick={props.onClearAll}>Clear All</button>
			</div>

		</div>
	);
}

export default MainContent;