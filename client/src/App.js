import NavBar from './components/NavBar/NavBar';
import { Landing, Home, Form, Detail, NotFound } from './views';
import { Route, useLocation, Navigate, BrowserRouter as Router, Switch } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = "https://pi-dogs-production-2b3c.up.railway.app/";

function App() {
  const location = useLocation();
  return (
    <Router>
      {location.pathname !== "/" && <NavBar />}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/create" component={Form} />
        <Route path="/404" component={NotFound} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Switch>
    </Router>
  );
}

export default App;
