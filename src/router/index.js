import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Notfound from '../pages/Notfound'
import Login from '../pages/auth/Login'
import User from '../pages/User'
import UserDetail from '../pages/UserDetail'
import Navigation from '../components/Navigation'
import Authenticated from '../components/Authenticated'

function Router() {
  return (
    <BrowserRouter>
        <Navigation/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Notfound />} />
            <Route path='/login' element={<Login />} />
            <Route element={<Authenticated />}>
              <Route path='/user' element={<User />} />
              <Route path='/user/:id' element={<UserDetail />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router