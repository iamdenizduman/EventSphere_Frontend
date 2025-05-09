import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import MainLayout from '../layouts/MainLayout';
import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default PrivateRoute;
