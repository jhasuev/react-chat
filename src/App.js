import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Home from './views/Home';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';
import Chats from './views/Chats';
import AuthGuard from './middlewares/AuthGuard'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/auth" element={ <Navigate to="/auth/login" /> } />

          <Route path="/auth/login" element={
            <AuthGuard component={ <Login /> } />
          } />

          <Route path="/auth/register" element={
            <AuthGuard component={ <Register /> } />
          } />
          
          <Route path="/chats" element={ <AuthGuard component={ <Chats /> } /> } />

          <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
