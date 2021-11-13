import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/HomePage/Home/Home';
import AllProducts from './Pages/Explore/AllProducts/AllProducts';
import Details from './Pages/Explore/Details/Details';
import Login from './Pages/LoginPages/Login/Login';
import Registration from './Pages/LoginPages/Registration/Registration';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/LoginPages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/DashboardPages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/explore'>
              <AllProducts></AllProducts>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Registration></Registration>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/details/:id'>
              <Details></Details>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
