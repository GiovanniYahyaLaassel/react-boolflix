import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import DefaultLayout from './layouts/DefaultLayout'
import SearchPage from './pages/SearchPage'
import Home from './pages/Home'
import About from './pages/About'




function App() {


  return (
    <>
      <BrowserRouter>
        {/* creo un contenitore generale */}
        <div className='container'>
          <Navbar/>
          <Routes>
            <Route Component={DefaultLayout}>
              {/* rotta principale con barra di ricerca */}
              <Route path='/' Component={SearchPage}></Route>

            </Route>
            
          </Routes>
        </div>

      </BrowserRouter>

    </>
  );
}

export default App
