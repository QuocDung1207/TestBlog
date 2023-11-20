import { Navigate, useLocation } from 'react-router-dom';
const ProtectedRoute = ({children}) =>{
  const gettoken = localStorage.getItem('jsonwebtoken')
  let location = useLocation();
  if(!gettoken){
    return <Navigate to='/login' state={{from:location}} replace/>
  }
return children
}

export default ProtectedRoute;
