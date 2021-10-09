import Navbar from './components/navbar/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts/Contacts';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from './components/context';
import AddContact from './components/contacts/AddContact';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import PageNotFound from './components/Exceptions/PageNotFound';
import About from './components/About/About';


function App() {
  return (
    <Provider>
      <Router>
      <div className="App">
        <Navbar title="Client List"/>
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/contact/add" component={AddContact} />
          <Route exact path="/about/:id" component={About}/>
          <Route component={PageNotFound} />
        </Switch>
      </div>
      </Router>
    </Provider>
  );
}
export default App;
