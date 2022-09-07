import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Board from './pages/Board';
import MemoDetails from './compoents/MemoDetails';
import Detail from './compoents/Detail';
import Create from './compoents/Create';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Main/>}>
        </Route>

        <Route path="/board" element ={<Layout/>} >
          <Route index element={<Board/>}/>
          <Route path=":memoCode" element={ <Detail/>}/>
          <Route path="create" element={<Create/>}/>
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
