import {Route,Routes} from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

import Header from './components/Header';
import Footer from './components/Footer';
// import CampsiteCard from './features/campsites/CampsiteCard.js';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
// import { CAMPSITES } from './app/shared/CAMPSITES';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='contact' element={<ContactPage/>}/>
        <Route path='directory' element={<CampsitesDirectoryPage/>}/>
        <Route
            path='directory/:campsiteId' 
            element={<CampsiteDetailPage/>}
          />
        <Route path='about' element={<AboutPage/>}></Route>

      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
