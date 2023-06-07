
import './App.css';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recommend from './components/Recommend';
import Login from './Layout/Body/Login';
import Crawling from './components/Crawling';

function App() {
    return (
    
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Recommend/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Crawling' element={<Crawling/>}></Route>
          
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;