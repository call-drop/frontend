
import './App.css';
import Home from "./components/home";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Ticket from "./components/ticket";
import CallLog from "./components/callLog";
import Plan from "./components/plan";
import SignUp from "./components/signup";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
        <Home />
        <Router>
            <Routes>
                <Route path='/ticket' element={<Ticket />}/>
                <Route path='/call_Log' element={<CallLog />}/>
                <Route path='/plan' element={<Plan />}/>
                <Route path='/signup' element={<SignUp />}/>
                <Route path='/login' element={<Login />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
