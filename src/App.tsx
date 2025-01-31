import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FlightBoard } from './components/FlightBoard';
import { FlightDetail } from './components/FlightDetail';
import ErrorBoundary from './components/ErrorBoundary';
import {Home} from "./components/Travel";
import ContactPage from './components/ContactPage';




function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            
            <Route path="/"element={<Home/>}/>
            <Route path="/flightboard" element={<FlightBoard />} />
            <Route path="/flight/:id" element={<FlightDetail />} />
            <Route path="/contact" element={<ContactPage />} />

          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;