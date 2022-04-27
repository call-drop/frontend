import "./App.css";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ticket from "./components/ticket";
import CallLog from "./components/callLog";
import Plan from "./components/plan";
import SignUp from "./components/signup";
import Login from "./components/login";
import SMS from "./components/sms";
import Call from "./components/call";
import CustomerList from "./components/employee/customerList";
import Profile from "./components/profile";
import Tower from "./components/employee/tower";
import OpenTickets from "./components/employee/openTickets";
import Linker from "./components/linker";

function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        <Routes>
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/call_Log" element={<CallLog />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sms" element={<SMS />} />
          <Route path="/call" element={<Call />} />
          <Route path="/customerList" element={<CustomerList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/towerCheck" element={<Tower />} />
          <Route path="/linker" element={<Linker />} />

          <Route path="/openTickets" element={<OpenTickets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
