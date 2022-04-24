import Login from './Pages/Login.js';
import Register from './Pages/Register.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

  function App() {
    return (
      <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      </>
    );
  }
    
  export default App;