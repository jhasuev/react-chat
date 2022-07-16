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

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/auth" element={ <Navigate to="/auth/login" /> } />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          
          <Route path="/chats" element={<Chats />} />

          <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
