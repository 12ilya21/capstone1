import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Chat from "./components/Chat";
import MapContainer from "./components/MapContainer";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/Register"} element={<Register />}></Route>
          <Route path={"/Login"} element={<Login />}></Route>
          <Route path={"/Chat"} element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Users/> */}
      {/* <API_test/> */}
      {/* <Register_API/> */}

      {/* <MapContainer /> */}
    </div>
  );
}

export default App;