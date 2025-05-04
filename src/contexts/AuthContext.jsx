import { createContext, useContext, useEffect, useState } from 'react';
import { decodeToken, isTokenExpired } from '../utils/jwt';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);
  const [user, setUser] = useState(null); // Kullanıcı bilgileri

  const login = (newToken) => {
    localStorage.setItem('authToken', newToken);
    setToken(newToken);

    const userData = decodeToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    if (savedToken && !isTokenExpired(savedToken)) {
      setToken(savedToken);
      const userData = decodeToken(savedToken);
      setUser(userData);
    } else {
      logout();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, login, user, logout, isAuthenticated: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
