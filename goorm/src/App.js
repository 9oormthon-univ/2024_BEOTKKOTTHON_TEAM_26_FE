import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainFunding from "./pages/main/MainFunding";
import Contest from "./pages/main/Contest";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainFunding />} />
          <Route path="/Contest" element={<Contest />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
