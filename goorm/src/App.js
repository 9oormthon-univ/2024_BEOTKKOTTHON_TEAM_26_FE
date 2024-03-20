import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Categories from "./pages/Categories";
import Detail from "./pages/Detail";
import 'bootstrap/dist/css/bootstrap.min.css' //Bootstrap CSS 파일
function App() {
  return (
    <div className="App">
{/*<h1>hello world</h1>*/}




    {/*  라우트 설정*/}
<Routes>
    {/*상세페이지 1,2*/}
    <Route path="/categories" element={<Categories />} />
    <Route path="/detail/:id" element={ <Detail/> } />
</Routes>

    {/*    임시 링크*/}
        <Link to='/'>홈</Link>
        <Link to='/categories'>상세페이지1</Link>
        <Link to='/detail/1'>상세페이지2</Link>

    </div>
  );
}

export default App;
