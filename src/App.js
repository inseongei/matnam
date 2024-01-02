import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/PC/Login";
import MSign from "./page/Mobile/MSign";
import Main from "./page/PC/Main";
import Recipe from "./page/PC/Recipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<MSign />}></Route>
          <Route path="/Recipe" element={<Recipe />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
