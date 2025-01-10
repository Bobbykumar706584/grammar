import Home from "./components/Home";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Tenses from "./components/Tense";
import Modal from "./components/Modal";
import Speech from "./components/Speech";
import Verb from "./components/Verb";
import { PrivacyPolicy } from "./components/Policy";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tense" element={<Tenses />} />
        <Route path="/verb" element={<Verb />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/speech" element={<Speech />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
