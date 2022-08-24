import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUpAdvertiser";
import SignUpOwner from "./pages/SignUpOwner";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUpOwner" element={<SignUpOwner />} />
      </Routes>
    </div>
  );
}

export default App;
