import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home.jsx';
import './App.css';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route index element={<User />} /> */}
          {/* <Route path='about' element={<About />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
