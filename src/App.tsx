import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoleSelection from './pages/RoleSelection';
import LoginPage from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/login/:role" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;