import './App.css';
import {Switch, Router, Link} from 'react-router-dom'
import {Layout, Typography, Space} from 'antd'
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">

      </div>

      <div className="footer">

      </div>
    </div>
  );
}

export default App;
