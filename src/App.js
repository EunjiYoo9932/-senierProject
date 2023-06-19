
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Recommend from './components/Recommend';
import Login from './Layout/Body/Login';
import SignIn from './Layout/Body/SignIn';

import Crawling from './components/Crawling';
import GetTest from './components/GetTest';
import LandingPage from './components/views/LandingPage/LandingPage';
import RecommendResult from './components/RecommendResult';
function App() {
    return (
    
    <div className="App">
      <BrowserRouter>
        <div id="wrapper" className="flex flex-col h-screen">
          <Header/>
          <div id="main-content" className="flex-1">
            <Routes>
              <Route path='/' element={<Recommend/>}></Route>
              <Route path='/Recommend' element={<Recommend/>}></Route>
              <Route path='/Login' element={<Login/>}></Route>
              <Route path='/Crawling' element={<Crawling/>}></Route>
              <Route path='/GetTest' element={<GetTest/>}></Route>
              <Route path='/LandingPage' element={<LandingPage/>}></Route>
              <Route path='/SignIn' element={<SignIn/>}></Route>
              <Route path='RecommendResult' element={<RecommendResult/>}></Route>
              <Route path='/SignIn' element={<SignIn/>}></Route>
            </Routes>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;