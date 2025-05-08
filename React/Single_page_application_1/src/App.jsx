import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Error from "./Components/Error";
import Mens from "./Components/Mens";
import Womens from "./Components/Women";
import Kids from "./Components/Kids";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>

           <Route path="/dashboard/mens/:type" element={<Mens />}></Route>
           <Route path="/dashboard/womens/:type/:color" element={<Womens />}></Route>
           <Route path="/dashboard/kids" element={<Kids />}></Route>

          </Route>
          <Route path="/error" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;