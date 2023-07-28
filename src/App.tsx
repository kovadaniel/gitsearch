import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import Single from './pages/Single';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return ( 
    <Provider store={store}> 
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              element={<Users/>}
              path={'/users'}/>
            <Route
              element={<Single/>}
              path={'/user/:login'}/>
            <Route
              element={<Navigate to={'/users'} replace/>}
              path={'/*'}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;