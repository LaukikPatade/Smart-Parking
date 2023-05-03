import logo from './logo.svg';
import './App.css';
import React, { Suspense, useState, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThirdwebProvider } from "@thirdweb-dev/react";


// import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

// import Header from './pages/Header';
// import Progress from './pages/Progress';
// import Landing from './pages/Landing'
// import Generate from './pages/Generate';
import Signup from "./pages/signup";
import Home from "./pages/Home";
import Signin from "./pages/signin";
import Maps from "./pages/Maps";
import BookingPage from "./pages/bookTicket"
import Transaction from './pages/Transaction';
import TransactionDetail from './pages/TransactionDetail';
import AuthState from './contexts/AuthState';
// import Signin from "./pages/Signin"

// import AuthState from './contexts/AuthState';
// import { AuthContext } from './contexts/AuthContext';
// const generateClassName = createGenerateClassName({
//     productionPrefix: 'co',
// })
function App() {
  return (
    <ThirdwebProvider activeChain="ethereum">
       <AuthState>
      <BrowserRouter>

        <div>
          <Routes>
            {/* <Route path="/auth/signin" element={<Signin />}/> */}
            <Route path="/register" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Signin />} />
            {/* <Route path="/itinerary" element={<Generate />} />
                            <Route path="/" element={<Landing />} /> */}
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/maps" element={<Maps />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/transaction-details/:id" element={<TransactionDetail />} />
            <Route path="/book" element={<BookingPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      </AuthState>
    </ThirdwebProvider>
  );
}

export default App;
