import TheMainGraph from "./TheMainGraph";

function TheMainGraphArea({ selectedXAxis, selectedYAxis, selectedXData, selectedYData }) {
    return (
        selectedXAxis && selectedYAxis ?
            <div style={{ padding: '0 40px' }}>
                <h1>{selectedXAxis} vs {selectedYAxis}</h1>
                <TheMainGraph selectedXData={selectedXData} selectedYData={selectedYData} />
            </div>
            :
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400 }}>No axes selected!</div>
    );
  }
  
  export default TheMainGraphArea;
  