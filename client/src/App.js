import NavBar from './components/NavBar/NavBar';
import { Landing, Home, Form, Detail, NotFound } from './views';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
//import axios from 'axios';

//axios.defaults.baseURL = "https://pi-dogs-production-2b3c.up.railway.app/";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <NavBar/>}
      <Switch>
        <Route exact path="/" component={Landing}/> 
        <Route path="/home" render={() => <Home />}/>  
        <Route path="/detail/:id" render={() => <Detail /> }/>
        <Route path="/create" render={() => <Form /> }/> 
        <Redirect from="/old-route" to="/new-route" /> {/* Redireccionar rutas antiguas */}
        <Route component={NotFound}/> {/* Ruta para NotFound */}
      </Switch> 
    </>
  );
}

export default App;
