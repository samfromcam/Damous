import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Your main page component
import CaseStudyPage from './case-study/CaseStudy'; // Your case study page component

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
      </Routes>
    </div>
  );
}

export default App;