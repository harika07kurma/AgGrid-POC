import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

// import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Aggrid = () =>{

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        { name: "Toyota", model: "Celica", price: 35000 , city :"Montreal"},
        { name: "Ford", model: "Mondeo", price: 32000 , city :"Toronto"},
        { name: "Porsche", model: "Boxter", price: 72000, city :"Vancouver" }
    ]);

    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}>
                <AgGridColumn field="name" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="model" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="price" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="city" sortable={ true } filter={ true }></AgGridColumn>
            </AgGridReact>
        </div>
    );

}


export default Aggrid;