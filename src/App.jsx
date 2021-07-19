import logo from './logo.svg';
import './App.scss';
import FormInput from './components/FormInput';
import List from './components/List';
import { DataProvider } from "./components/DataProvider"

function App() {
  return (
    <DataProvider>
      <div className="App">
      <h1>Todos</h1>
       <div className="form-container">
       
        <FormInput/>
        <List/>
        
       </div>
    </div>
    </DataProvider>
  );
}

export default App;
