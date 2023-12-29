import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Plogin from "./page/PC/Plogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/Login" element={<Plogin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
