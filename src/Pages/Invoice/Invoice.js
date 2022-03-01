import React from 'react';
import { render } from 'react-dom';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


class Invoice extends React.Component {
	constructor(props) {
        super(props);

		this.state = {
			columnDefs: [
				{headerName: "Desc", field: "name"},
				{headerName: "Qty", field: "qty"},
				{headerName: "Price", field: "price"}

			],
			rowData:""
		}
	}
    

	render() {
		return (
			<div
				className="ag-theme-balham"
				style={{
					height: '500px',
					width: '600px'
				}}
			>
				<AgGridReact
					columnDefs={this.state.columnDefs}
					rowData={this.state.rowData}>
				</AgGridReact>
			</div>
		);
	}
}
export default  Invoice