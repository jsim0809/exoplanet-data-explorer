import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AxisSelector({ allData, selectedAxis, setSelectedAxis, setSelectedData, axisValues }) {

  const handleChange = (event) => {
    let selection = event.target.value;
    setSelectedAxis(selection);
    var data = [];
    allData.forEach((row) => {
      let datum = row[selection];
      data.push(+datum);
    });
    setSelectedData(data);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Select axis</InputLabel>
      <Select
        value={selectedAxis}
        label="Selected axis"
        onChange={handleChange}
      >
        {axisValues.map((value) => {
          return <MenuItem key={value} value={value}>{value}</MenuItem>  
        })}
      </Select>
    </FormControl>
  );
}
  
export default AxisSelector;