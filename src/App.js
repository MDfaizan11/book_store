import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Addbooks from "./Pages/Addbooks";
import Editbooks from "./Pages/Editbooks";
// import Home from "./Pages/Home";
import Header from "./components/Header";
import Mybooks from "./Pages/Mybooks";
import Login from "./login/Login";
import Protected from "./protected/Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Header />
          <Routes>
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/add" element={<Addbooks />} />
            <Route path="/" element={<Mybooks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/edit/:id" element={<Editbooks />} />

            <Route element={<Protected />}></Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
