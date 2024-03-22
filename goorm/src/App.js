import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainFunding from "./pages/main/MainFunding";
import Contest from "./pages/main/Contest";
import Categories from "./pages/Categories";
import Detail from "./pages/Detail";
import Payment from "./pages/Payment";
import DetailView from "./pages/DetailView";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainFunding />} />
          <Route path="/Contest" element={<Contest />} />

          {/*상세페이지 1,2*/}
          <Route path="/categories" element={<Categories />} />
          <Route path="/detail/:id" element={<Detail />} />
          {/*펀딩제품 상세보기*/}
          <Route path="/detailview" element={<DetailView />} />
          {/*결제진행창 */}
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
