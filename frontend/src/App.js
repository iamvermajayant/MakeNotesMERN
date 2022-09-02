import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screen/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from './screen/mynotes/MyNotes';
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import CreateNote from "./screen/CreateNote/CreateNote";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main style={{ minHeight: "93vh" }}>
          <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/createnote" element={<CreateNote/>}></Route>
            <Route path="/mynotes" element={<MyNotes/>}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
