import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home';
import Photo from './Components/Photo/Photo';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import User from './Components/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <UserStorage>
          <Header />

          <main className='app-body'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='login/*' element={<Login />}></Route>
              <Route path='foto/:id' element={<Photo />}></Route>
              <Route path='perfil/:user' element={<UserProfile />}></Route>
              <Route 
                path='conta/*' 
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path='*' element={<NotFound />}></Route>
            </Routes>  
          </main>

          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
