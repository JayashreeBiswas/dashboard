import logo from './logo.svg';
import User from './assets/user.png';
import './App.css';
import {Routes, Route, Link, Outlet} from "react-router-dom";
import Form from './components/form/form.component';
import DashBody from './components/dashboard/dashboard.component';
import Portal from './routes/support-portal/supportPortal.component';

const DashBoard = () => {
  return(
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <img src={logo} alt="logo" />
          <p>Delivery</p>
        </div>
        <div className="SearchBox-container">
          <input type="search" placeholder="Search...."  />
        </div>
        <div className="User-info">
          <img src={User} alt="logo" />
          <p>JHON</p>
        </div>
      </header>
      <section className="dashboard-body">
        <div className="dashboard-body-left">
          <div className="sidebar-container">
            <ul className="sidebar">
              <li className="active"><Link to="/">Dashboard</Link></li>
              <li><Link to="/form">Simple Form</Link></li>
              <li><Link to="/support-portal">Support Portal</Link></li>
              <li>Orders</li>
            </ul>
          </div>
        </div>
        <div className="dashboard-body-right">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}>
        <Route index element={<DashBody />} />
        <Route path="/form" element={<Form />} />
        <Route path='/support-portal' element={<Portal />} />
      </Route>
    </Routes>
    
  );
}

export default App;
