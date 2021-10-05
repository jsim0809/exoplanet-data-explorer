import { Paper } from "@mui/material";
import AxisHistogram from "./AxisHistogram";
import AxisSelector from "./AxisSelector";

function AxisSelectionArea({ allData, title, selectedAxis, setSelectedAxis, selectedData, setSelectedData, axisValues }) {
    return (
      <Paper elevation={1} style={{ padding: '0 24px' }}>
        <h3>{title}</h3>
        <AxisSelector allData={allData} selectedAxis={selectedAxis} setSelectedAxis={setSelectedAxis} setSelectedData={setSelectedData} axisValues={axisValues} />
        <AxisHistogram selectedData={selectedData} />
      </Paper>
    );
  }
  
  export default AxisSelectionArea;
  