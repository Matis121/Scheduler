import './App.css';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Services from './pages/Services';
import Calendar from './pages/Calendar';
import { Route, Routes } from "react-router-dom"
import { ServicesProvider } from './context/ServicesContext';
import { ClientsProvider } from './context/ClientsContext';

function App() {
  return (
    <>
      <ServicesProvider >
        <ClientsProvider >
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/calendar' element={<Calendar />}/>
            <Route path='/clients' element={<Clients />}/>
            <Route path='/services' element={ <Services />}/>
          </Routes>
        </ClientsProvider>
      </ServicesProvider>
    </>
  );
}

export default App;
