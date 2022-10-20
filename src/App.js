import logo from './logo.svg';
import './App.css';
import { BarChart } from 'eazychart-react';
import 'eazychart-css';

function App() {
  const data = [
    { country: 'Italy', population: 65 },
    { country: 'Spain', population: 46 },
    { country: 'Australia', population: 25 },
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <BarChart
          data={data}
          xAxis={{
            domainKey: 'population',
            title: 'Population',
            nice: 2,
          }}
          yAxis={{
            domainKey: 'country',
            title: 'Country',
          }}
        />
      </header>
    </div>
  );
}

export default App;
