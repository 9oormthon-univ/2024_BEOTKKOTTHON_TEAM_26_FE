import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainFunding from "./pages/main/MainFunding";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainFunding />} />
            {/*상세페이지 1,2*/}
            <Route path="/categories" element={<Categories />} />
            <Route path="/detail/:id" element={ <Detail/> } />
            <Route path="/test" element={ <Test/> } />
        </Routes>


      </div>
    </BrowserRouter>

  );
}


export default App;
