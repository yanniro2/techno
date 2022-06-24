import "./Style/main.css";
import Login from "./Components/Login";
import Main from "./Components/Main";
import React from "react";
function App() {
  const [login, setLogin] = React.useState(false);

  const loginCheck = () => {
    setLogin(!login);
  };

  return (
    <div className="App">
      {!login ? <Login loginCheck={loginCheck} /> : <Main />}
    </div>
  );
}

export default App;
