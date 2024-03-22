import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainFunding from "./pages/main/MainFunding";
import Contest from "./pages/main/Contest";
import MyFunding from "./pages/my/MyFunding";
import Categories from "./pages/Categories";
import Detail from "./pages/Detail";
import Payment from "./pages/Payment";
import DetailView from "./pages/DetailView";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* 메인페이지 */}
          <Route path="/" element={<MainFunding />} />
          {/* 공모페이지 */}
          <Route path="/contest" element={<Contest />} />
          {/* 나의 펀딩 현황 */}
          <Route path="/myFunding" element={<MyFunding />} />

          {/*상세페이지 1,2*/}
          <Route path="/categories" element={<Categories />} />
          <Route path="/detail/:id" element={<Detail />} />
          {/*펀딩제품 상세보기*/}
          <Route path="/detailview" element={<DetailView />} />
          {/*결제진행창 */}
          <Route path="/payment" element={<Payment />} />
          {/*등록완료 페이지*/}
          <Route path="/register" element={<Register />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
