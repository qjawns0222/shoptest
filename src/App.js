import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Assign from "./component/assign";

import Home from "./component/home";
import Subject from "./component/subjec";

function App() {
  const [state, setState] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assign" element={<Assign />} />
        <Route path="/subject" element={<Subject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
