import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home.jsx';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
