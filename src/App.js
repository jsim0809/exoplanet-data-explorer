import './App.css';
import TheTitleBar from './components/TheTitleBar/TheTitleBar';
import TheControlArea from './components/TheControlArea/TheControlArea';
import TheMainGraphArea from './components/TheMainGraphArea/TheMainGraphArea';
import { Container, createTheme, Paper, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import * as d3 from 'd3';

// Design decision: hardcoded axis values.
const AXIS_VALUES = [
  'P. Min Mass (EU)', 'P. Mass (EU)', 'P. Max Mass (EU)', 'P. Radius (EU)', 'P. Density (EU)', 'P. Gravity (EU)', 'P. Esc Vel (EU)',
  'P. SFlux Min (EU)', 'P. SFlux Mean (EU)', 'P. SFlux Max (EU)', 'P. Teq Min (K)', 'P. Teq Mean (K)', 'P. Teq Max (K)', 'P. Ts Min (K)',
  'P. Ts Mean (K)', 'P. Ts Max (K)', 'P. Surf Press (EU)', 'P. Mag	', 'P. Appar Size (deg)', 'P. Period (days)', 'P. Sem Major Axis (AU)',
  'P. Eccentricity', 'P. Mean Distance (AU)', 'P. Inclination (deg)', 'P. Omega (deg)', 'S. Mass (SU)', 'S. Radius (SU)', 'S. Teff (K)',
  'S. Luminosity (SU)', 'S. [Fe/H]', 'S. Age (Gyrs)', 'S. Appar Mag', 'S. Distance (pc)', 'S. RA (hrs)', 'S. DEC (deg)', 'S. Mag from Planet',
  'S. Size from Planet (deg)', 'S. No. Planets', 'S. No. Planets HZ', 'S. Hab Zone Min (AU)', 'S. Hab Zone Max (AU)', 'P. HZD', 'P. HZC',
  'P. HZA', 'P. HZI', 'P. SPH', 'P. Int ESI', 'P. Surf ESI', 'P. ESI', 'S. HabCat', 'P. Habitable', 'P. Hab Moon', 'P. Confirmed', 'P. Disc. Year'
]

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: 'Avenir'
    }
  });

  let [allData, setAllData] = useState(null);
  let [selectedXAxis, setSelectedXAxis] = useState('');
  let [selectedYAxis, setSelectedYAxis] = useState('');
  let [selectedXData, setSelectedXData] = useState([]);
  let [selectedYData, setSelectedYData] = useState([]);

  useEffect(() => {
    d3.csv("./phl_hec_all_confirmed.csv")
      .then((csvData) => {
        setAllData(csvData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={0} style={{ height: '100vh' }}>
        <div className="app">
          <TheTitleBar />
          <Container fixed>
            <TheControlArea
              allData={allData}
              selectedXAxis={selectedXAxis}
              setSelectedXAxis={setSelectedXAxis}
              selectedXData={selectedXData}
              setSelectedXData={setSelectedXData}
              selectedYAxis={selectedYAxis}
              setSelectedYAxis={setSelectedYAxis}
              selectedYData={selectedYData}
              setSelectedYData={setSelectedYData}
              axisValues={AXIS_VALUES}
            />
            <TheMainGraphArea
              selectedXAxis={selectedXAxis}
              selectedYAxis={selectedYAxis}
              selectedXData={selectedXData}
              selectedYData={selectedYData}
            />
          </Container>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
