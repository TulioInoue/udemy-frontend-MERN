import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Aqui você checa se o token existe no localStorage
  const token = localStorage.getItem('token');

  if (!token) {
    // Se não houver token, manda para o login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;