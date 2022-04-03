import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './component/Error/Error';
import Header from './component/Header/Header';
import Home from './component/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
