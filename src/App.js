import React from 'react';
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App(props) {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/resume'} element={<Resume/>}/>
                    <Route path={'/portfolio'} element={<Portfolio/>}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;