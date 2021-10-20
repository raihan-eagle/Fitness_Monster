
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import { createContext, useEffect, useState } from 'react';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import NotFound from './component/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import PriveteRoute from './component/PrivateRoute/PriveteRoute';
import MemberShipPlan from './component/MemberShipPlan/MemberShipPlan';
import Footer from './component/Footer/Footer';


export const ServiceContext = createContext()
export const ReloadContext =createContext()

function App() {

  const [services, setServices] = useState([]);
  const [isLoading, setLoading] = useState(true)
  useEffect(()=>{
      fetch('./services.json')
      .then(res=>res.json())
      .then(data=>setServices(data))
      .finally(() => setLoading(false))
  },[])

    return (
    <div className="App">
      <AuthProvider>
        <ReloadContext.Provider value ={isLoading}>
        <ServiceContext.Provider value = {services}>
        <Router>
          <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PriveteRoute path='/services/:serviceId'>
            <ServiceDetails></ServiceDetails>
          </PriveteRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>          
          <PriveteRoute path='/angles'>
            <MemberShipPlan></MemberShipPlan>
          </PriveteRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
        </Router>
        </ServiceContext.Provider>
        </ReloadContext.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
