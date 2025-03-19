import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormProvider } from "./Context/FormContext";
import Form1 from "./components/Form1/Form1";
import Form2 from "./components/Form2/Form2";
// import CardsList from "./components/Cards/CardsList";
import Home from "./components/Pages/Home";

function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Form1 />} />
          <Route path="/form-two" element={<Form2 />} />
          <Route path="/card-list" element={<Home />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
