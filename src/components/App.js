import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import UserDashboardPage from './users/UserDashboardPage'
import GameDashboardPage from './games/GameDashboardPage'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserDashboardPage />} />
                <Route path="/games" element={<GameDashboardPage />} />
            </Routes>
        </Router>
    )
}

export {App as default}