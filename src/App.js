import { BrowserRouter as Router , Routes , Route, Navigate } from "react-router-dom";


import MainLayout from "./layouts/MainLayout";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/" element={<MainLayout />} >
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
