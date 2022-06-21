import { Routes, Route} from "react-router-dom";

import Contacts from "./component/contact/Contacts";
import Features from "./component/featur/Features";
import Home from "./component/home/Home";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/feater" element={<Features />} />
        </Routes>
    </>
  );
}

export default App;
