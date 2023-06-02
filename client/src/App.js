import NavBar from './components/NavBar/NavBar';
import { Landing, Home, Form, Detail, NotFound } from './views';
import { Route, useLocation } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = "https://pi-dogs-production-2b3c.up.railway.app/";

function App() {
  const location = useLocation()
  return (
    <>
      {location.pathname !== "/" && <NavBar/>}
        <Route exact path="/" component={Landing}/> 
        <Route path="/home" render={() => <Home />}/>  
        <Route path="/detail/:id" render={() => <Detail /> }/>
        <Route path="/create" render={() => <Form /> }/> 
        <Route path="*" render={() => <NotFound />}/>
      
    </>
  );
}

export default App;
