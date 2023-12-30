import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Login from "./page/Login";
import MSign from "./page/Mobile/MSign";
import Main from "./page/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<MSign />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
