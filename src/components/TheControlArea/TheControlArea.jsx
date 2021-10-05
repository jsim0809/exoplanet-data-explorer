import { Paper } from "@mui/material";
import AxisSelectionArea from "./AxisSelectionArea/AxisSelectionArea";

function TheControlArea({ allData,
  selectedXAxis, setSelectedXAxis, selectedXData, setSelectedXData, 
  selectedYAxis, setSelectedYAxis, selectedYData, setSelectedYData, axisValues }) {
    return (
      <Paper elevation={0} style={{ display: 'grid', gridTemplateColumns: "1fr 1fr", columnGap: '8px', padding: '8px' }}>
        <AxisSelectionArea title={"X-Axis"} allData={allData} selectedAxis={selectedXAxis} setSelectedAxis={setSelectedXAxis} 
          selectedData={selectedXData} setSelectedData={setSelectedXData} axisValues={axisValues} />
        <AxisSelectionArea title={"Y-Axis"} allData={allData} selectedAxis={selectedYAxis} setSelectedAxis={setSelectedYAxis} 
          selectedData={selectedYData} setSelectedData={setSelectedYData} axisValues={axisValues} />
      </Paper>
    );
  }
  
  export default TheControlArea;
  