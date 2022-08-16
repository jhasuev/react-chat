import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthGuard = ({ component }) => {
  const { token } = useSelector(state => state.auth)
  const location = useLocation();

  const authedRoutes = [
    '/auth/login',
    '/auth/register',
  ]

  if (token) {
    if (authedRoutes.includes(location.pathname)) {
      return <Navigate to="/chats" />
    }
    return component
  } else {
    if (authedRoutes.includes(location.pathname)) {
      return component
    }
    return <Navigate to="/auth/login" />
  }
}

export default AuthGuard
