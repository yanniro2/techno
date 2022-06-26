import "./Style/main.css";
import Login from "./Components/Login";
import Main from "./Components/Main";
import Register from "./Components/Register";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [login, setLogin] = React.useState(true);
  const [register, setRegister] = React.useState(false);
  const loginCheck = () => {
    setLogin(!login);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        {/* <Login /> */}
        {/* <Login />
      <Main /> */}
        {/* <Register /> */}
      </div>
    </Router>
  );
}

export default App;
