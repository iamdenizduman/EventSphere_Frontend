import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Login from './pages/Login/Login';
import EventDetail from './pages/EventDetail/EventDetail.jsx';
import Home from './pages/Home/Home.jsx';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/eventDetail/:id' element={<EventDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
