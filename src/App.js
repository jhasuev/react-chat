import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
