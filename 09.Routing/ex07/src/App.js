import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import About from "./component/About";
import { useRoutes }from 'react-router';

export default function App() {
    return useRoutes([
        {path : '/' , element: <Main /> },
        {path : '/gallery' , element: <Gallery /> },
        {path : '/guestbook' , element: <Guestbook /> },
        {path : '/about' , element: <About /> },
        {path : '/*' , element: <Error404/> },
    ]);
    
    /*
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/gallery' element={<Gallery />}/>
                <Route path='/guestbook' element={<Guestbook />}/>
                <Route path='/about' element={<About />}/>
                <Route path='*' element={<Error404 />}/>
            </Routes>
        </Router>
    );
    */
}