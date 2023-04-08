import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LogInPage from './pages/LogInPage';
import Dashboard from './pages/DashBoardPage/Dashboard';
// import PageNotFound from './components/PageNotFound';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/pagenotfound" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;