import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes';

import Modal from 'react-modal';
import { PartiesProvider } from './hooks/useParties';
import { GlobalStyle } from './styles/globalStyles';

import { AuthProvider } from './hooks/AuthContext';

Modal.setAppElement('#root')

export function App() {
   

    return (
        <AuthProvider>
            <Router>
                <PartiesProvider>
                    <Routes />
                    <GlobalStyle />                
                </PartiesProvider>
            </Router>
        </AuthProvider>
    )
}