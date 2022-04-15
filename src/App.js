import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import AddCar from '../src/components/addcar/AddCar';
import Login from './components/login/Login';
import Register from './components/login/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from '../src/components/privateroute/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Blogs from './components/blogs/Blogs';
import Cars from './components/cars/Cars';
import CarDetails from './components/cardetails/CarDetails';
import MakeAdmin from './components/makeadmin/MakeAdmin';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
     <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/cars">
          <Cars></Cars>
        </Route>
        <Route exact path="/addcar">
          <AddCar></AddCar>
        </Route>
        <Route  path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route  path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <PrivateRoute exact path="/car/:id">
          <CarDetails></CarDetails>
        </PrivateRoute>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/blogs">
          <Blogs></Blogs>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
      
     
    </div>
  );
}

export default App;
