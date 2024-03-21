import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainFunding from "./pages/main/MainFunding";
import Contest from "./pages/main/Contest";
import Categories from "./pages/Categories";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainFunding />} />
          <Route path="/Contest" element={<Contest />} />
          {/* 상세페이지 1,2 */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/detail/:id" element={<Detail />} />/
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
