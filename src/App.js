import Navbar from './components/navbar/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts/Contacts';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from './components/context';

function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar title="Client List"/>
        <Contacts />
      </div>
    </Provider>
  );
}
export default App;
