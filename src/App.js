import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import CreatePost from './components/Create/Create';
import Catalog from './components/Catalog/Catalog';
import { useEffect, useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Logout from './components/Logout/Logout';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import MyPlayers from './components/MyPlayers/MyPlayers';

import * as PlayersService from './services/dataService';
import { PlayerProvider} from './contexts/DataContext';
import Owner from './components/Owner/Owner';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <h1>Favourite Tennis Players</h1>
        <Navigation />

        <PlayerProvider>
          <main id="content">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/register" element={ <Register /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/create" element={(
                <PrivateRoute>
                 <CreatePost />
                </PrivateRoute>
                )} />
              <Route path="/catalog" element={ < Catalog /> } />
              <Route path="/logout" element={ < Logout /> } />
              <Route path="/catalog/:playerId" element={< Details />} />
              <Route element={ <Owner/>}>
                <Route path="/players/:playerId/edit" element = { <Edit /> } />
              </Route>
              <Route path="/myPage" element = { <MyPlayers /> } />


            </Routes>
          </main>
        </PlayerProvider>
      </div>
    </AuthProvider>
  );
}

export default App;