import { BrowserRouter, Routes,Route} from 'react-router-dom'

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
   
    <div className="App">
     <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
        </BrowserRouter>
    </div>
    
      
  )
}

export default App;
