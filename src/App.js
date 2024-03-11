import {Route,Routes} from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

import Header from './components/Header';
import Footer from './components/Footer';
// import CampsiteCard from './features/campsites/CampsiteCard.js';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
// import { CAMPSITES } from './app/shared/CAMPSITES';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/directory' element={<CampsitesDirectoryPage/>}/>
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
