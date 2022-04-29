import "./App.css";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ticket from "./components/ticket";
import CallLog from "./components/callLog";
import Plan from "./components/employee/plan";
import SignUp from "./components/signup";
import Login from "./components/login";
import SMS from "./components/sms";
import Call from "./components/call";
import CustomerList from "./components/employee/customerList";
import Profile from "./components/profile";
import Tower from "./components/employee/tower";
import OpenTickets from "./components/employee/openTickets";
import Linker from "./components/linker";
import KYC from "./components/employee/KycList";
import MMS from "./components/mms";
import CustomNav from "./components/navbar";
import EmployeeList from "./components/employee/employeeList";
import CustomerPlan from "./components/customerPlan";
import List from "./components/list";
import List2 from "./components/list2";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <CustomNav />
      <Router>
        <Routes>
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/" element={<Home />} />
          <Route path="/listtt" element={<List />} />
          <Route path="/listtt2" element={<List2 />} />

          <Route path="/call_Log" element={<CallLog />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sms" element={<SMS />} />
          <Route path="/mms" element={<MMS />} />
          <Route path="/call" element={<Call />} />
          <Route path="/customerList" element={<CustomerList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/towerCheck" element={<Tower />} />
          <Route path="/linker" element={<Linker />} />
          <Route path="/kyc" element={<KYC />} />
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/personalPlan" element={<CustomerPlan />} />
          <Route path="/openTickets" element={<OpenTickets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
