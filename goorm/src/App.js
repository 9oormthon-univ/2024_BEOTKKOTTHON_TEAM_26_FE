import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainFunding from "./pages/main/MainFunding";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainFunding />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
