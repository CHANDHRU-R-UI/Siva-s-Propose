import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Memory from './pages/Memory';
import Reasons from './pages/Reasons';
import Proposal from './pages/Proposal';
import Final from './pages/Final';
import FloatingHearts from './components/FloatingHearts';

function App() {
  return (
    <HashRouter>
      <div className="relative min-h-screen overflow-hidden">
        <FloatingHearts count={8} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/reasons" element={<Reasons />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
