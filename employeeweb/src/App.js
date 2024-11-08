import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./pages/header/Header";
import Dashboard from './pages/dashboard/Dashboard';
import NoMatch from './pages/noMatch/NoMatch';
import PostUser from './pages/employee/PostUser';
import UpdateUser from './pages/employee/UpdateUser';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <div className="App"> {/* Outer wrapper to control overall layout */}
      <Header /> {/* Header stays at the top */}
      <div className="main-content"> {/* Main content wrapper */}
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/employee' element={<PostUser />} />
          <Route path='/employee/:id' element={<UpdateUser />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </div>
      <Footer /> {/* Footer stays at the bottom */}
    </div>
  );
}

export default App;
