import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import './App.css';
import Header from './Layout/Header';
import Home from './PAGES/Home/Home';
import ShowMorePage from './PAGES/Home/ShowMorePage';
import Index from './PAGES/Write/Index';

import Footer from './Layout/Footer';
import { HabitsProvider } from './context/HabitsContext';
import ProfilePage from './PAGES/Home/ProfilePage';
import { ProfileProvider } from './context/ProfileContext';
import UpdateHabit from './PAGES/Write/UpdateHabit';


function App() {

  return (
   <>
    <HabitsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Index" element={<Index />} />
          <Route path="/ShowMorePage/:id" element={<ShowMorePage />} />
          <Route path="/edit/:id" element={<UpdateHabit />} />
          <Route path="/profile" element={<ProfileProvider><ProfilePage /></ProfileProvider>} />
        </Routes>
        <Footer/>
      </Router >
    </HabitsProvider>
    </>
  )
}

export default App
