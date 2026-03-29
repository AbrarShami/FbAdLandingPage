import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ApplyPage from './pages/ApplyPage';

const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/apply" element={<ApplyPage />} />
  </Routes>
);

export default App;
