/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router-dom';
import CalculatorPage from './routes/Calculatorpage';
import Calculator from './componets/calculator';
import './App.css';
import Homepage from './routes/Homepage';
import Quote from './routes/QuotePage';
import Navbar from './componets/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="home" element={<Homepage />} />
        <Route path="*" element={<Homepage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="calc" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
