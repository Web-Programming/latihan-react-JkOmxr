// import logo from './logo.svg';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Hello from './Hello';
import Product from './Product';
import Registrasi from './Registrasi';
import React from 'react';
import routes from './route';

function App() {
  return (
    <React.Suspense fallback={<div>Loading ....</div>}>
      <div className='App'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <NavLink to="/" className="Navbar-brand">
              Navbar
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id='navbarNav'>
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/product" className="nav-link">Product</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/register" className="nav-link">Register</NavLink>
              </li>

            </ul>
          </div>

        </nav>

        <div className='main'>
          <Routes>
            {
              routes.map((route, i) => {
                const { path, Component } = route;
                return <Route key={i} path={path} element={<Component />} />;
              })
            }
          </Routes>
        </div>
      </div>
    </React.Suspense>
  );
}

export default App;
