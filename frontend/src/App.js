import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './pages/Homeindex'
import Result from './pages/Resultindex'
//import Result from './components/Result/Resultindex'

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/result' element={<Result/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
