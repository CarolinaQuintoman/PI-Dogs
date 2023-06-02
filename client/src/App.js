import NavBar from './components/NavBar/NavBar';
import { Landing, Home, Form, Detail, NotFound } from './views';
import { Route, useLocation } from 'react-router-dom';



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
