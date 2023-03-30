import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/gifts' element={<Home />}></Route>
            <Route path='/women' element={<Home />}></Route>
            <Route path='/men' element={<Home />}></Route>
            <Route path='/kids' element={<Home />}></Route>
            <Route path='/shoes' element={<Home />}></Route>
            <Route path='/handbags' element={<Home />}></Route>
            <Route path='/jewelry' element={<Home />}></Route>
            <Route path='/beuty' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/bed&bath' element={<Home />}></Route>
            <Route path="/Conn'sxBelk" element={<Home />}></Route>
            <Route path='/brands' element={<Home />}></Route>
            <Route path='/clearence' element={<Home />}></Route>
        </Routes>
    )
}
