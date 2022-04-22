
import './App.css';
import Home from "./components/home";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Ticket from "./components/ticket";
import CallLog from "./components/callLog";

function App() {
  return (
    <div className="App">
        <Home />
        <Router>
            <Routes>
                <Route path='/ticket' element={<Ticket />}/>
                <Route path='/call_Log' element={<CallLog />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
