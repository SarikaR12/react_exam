import React from 'react'
import { Navbar } from './redux/atoms/Atoms'
import { Route, Routes } from 'react-router-dom'
import Manage from './redux/admin/pages/Manage'
import Dashboard from './redux/admin/pages/Dashboard'
import Home from './redux/user/pages/Home'
import Moovie from './redux/user/pages/Moovie'

const App = () => {

    let role = "admin"

    if (role === "admin") {
        return (
            <>
                <Navbar element={role} />
                <Routes>
                    <Route path='/' element={<Manage />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </>
        )
    }
    if (role === "user") {
        return (
            <>
                <Navbar element={role} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/moovie' element={<Moovie />} />
                </Routes>
            </>
        )
    }
}
export default App;
