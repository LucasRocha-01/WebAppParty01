import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes';

import Modal from 'react-modal';
import { PartiesProvider } from './hooks/useParties';
import { GlobalStyle } from './styles/globalStyles';

import React from 'react';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';
import AppProvider from './hooks';

Modal.setAppElement('#root')

export function App() {
   

    return (
        <Router>
            <AppProvider>
                <PartiesProvider>
                    <Routes />
                    <GlobalStyle />                
                </PartiesProvider>
            </AppProvider>
        </Router>
    )
}