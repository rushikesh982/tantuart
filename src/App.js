import './App.css';
import Header from './components/Navbar/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import WorkShop from './components/Workshop/WorkShop';
import InteriorProjects from './components/InteriorProjects/InteriorProjects';
import Contact from './components/Contact/Contact';
import OurStory from './components/OurStory/OurStory';
import SignIn from './components/Navbar/SignIn';
import Cart from './components/cart/Cart';
import StringArt from './components/Shop/subOption/StringArt/StringArt';
import TextureArt from './components/Shop/subOption/TextureArt/TextureArt';
import EmbroideryArt from './components/Shop/subOption/Embroidery/EmbroideryArt';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/workshop' element={<WorkShop />} />
        <Route path='/interiorProjects' element={<InteriorProjects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/ourStory' element={<OurStory />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/string-art' element={<StringArt/>}></Route>
        <Route path='/texture-art' element={<TextureArt/>}></Route>
        <Route path='/embroidery-art' element={<EmbroideryArt/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
