import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import DefaultLayout from './layouts/DefaultLayout'
import SearchPage from './components/SearchPage'
import Main from './components/main'




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
