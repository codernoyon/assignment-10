import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
