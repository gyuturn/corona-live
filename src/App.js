import './App.css';
import Header from "./contents/Header"
import Acc from "./contents/Korea/Acc"
import Graph from "./contents/Korea/Graph"
import ChinaAcc from "./contents/China/ChinaAcc"
import Nav from "./contents/Nav"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        
      <Routes>
        <Route  path="/"  element={<Acc/>}/>
        <Route  path="/"  element={<Graph/>}/>
        <Route  path="/corona-live"  element={<Acc/>}/>
        <Route  path="/corona-live"  element={<Graph/>}/>
        <Route  path="/china" element={ <ChinaAcc/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
