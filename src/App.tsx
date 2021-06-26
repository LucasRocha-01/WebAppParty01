import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes';

import Modal from 'react-modal';
import { PartiesProvider } from './hooks/useParties';
import { UsersProvider } from './hooks/useUser';
import { GlobalStyle } from './styles/globalStyles';

import AppProvider from './hooks';

Modal.setAppElement('#root')

export function App() {
   

    return (
        <Router>
            <AppProvider>
                    <PartiesProvider>
                <UsersProvider>
                        <Routes />
                        <GlobalStyle />                
                </UsersProvider>
                    </PartiesProvider>
            </AppProvider>
        </Router>
    )
}