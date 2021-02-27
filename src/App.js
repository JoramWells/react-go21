import './App.css';

import Footer from './components/Footer';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Routers from './components/Routers';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  return (
<>
<Router>
<Navigation />
  <Route path="/" exact component={Routers} />
  <Route path="/login"  component={Login} />
  <Route path="/register"  component={Register} />


</Router>

<Footer />
</>
  );
}

export default App;
