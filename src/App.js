import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/login/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from '../src/components/privateroute/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Blogs from './components/blogs/Blogs';
import MakeAdmin from './components/makeadmin/MakeAdmin';
import AddMenu from './components/addmenu/AddMenu';
import Products from './components/products/Products';
import MenuDetails from './components/menudetails/MenuDetails';
import Articles from './components/articles/Articles';
import Faq from './components/faq/Faq';

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
        <Route exact path="/products">
         <Products></Products>
        </Route>
        <Route exact path="/addmenu">
       <AddMenu></AddMenu>
        </Route>
        <Route  path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route  path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route  path="/faq">
         <Faq></Faq>
        </Route>
        <PrivateRoute exact path="/products/:id">
       <MenuDetails></MenuDetails>
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
         <Articles></Articles>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
      
     
    </div>
  );
}

export default App;
