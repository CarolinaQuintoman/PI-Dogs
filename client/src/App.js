//import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import { Landing, Home, Form, Detail } from './views';
import { Route, useLocation } from 'react-router-dom';
//import NotFound from './views/NotFound/NotFound';


function App() {
  const location = useLocation()
  return (
    <div>
      {location.pathname !== "/" && <NavBar/>}
        <Route exact path="/" component={Landing}/> 
        <Route path="/home" render={() => <Home />}/>  
        <Route path="/detail/:id" render={() => <Detail /> }/>
        <Route path="/create" render={() => <Form /> }/> 
       
        {/* <Route path="*" render={() => <NotFound/>}/> */}
      
    </div>
  );
}

export default App;
