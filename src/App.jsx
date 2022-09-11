import './App.css'
import Home from './components/pages/home/Home'
import Login from './components/pages/login/Login'
import {store} from "./store/store"
import { Provider } from 'react-redux'
function App() {

  return (
    <Provider store={store}>
    <div className="App">
    
    <Home/>
    <Login/>
    </div>
    </Provider>
  )
}

export default App
