import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes';

import Modal from 'react-modal';
import { NewPartyModal } from './components/NewPartyModal';
import { ViewPartyModal } from './components/ViewPartyModal';
import Dashboard from './page/Dashboard';
import { PartiesProvider } from './hooks/useParties';
import { GlobalStyle } from './styles/globalStyles';

Modal.setAppElement('#root')

export function App() {
    const [isNewPartyModalOpen, setIsNewPartyModalOpen] = useState(false);

    function handleOpenNewPartyModal() {
        setIsNewPartyModalOpen(true);
    }

    function handleClosedNewPartyModal() {
        setIsNewPartyModalOpen(false);
    }


    const [isViewPartyModalOpen, setIsViewPartyModalOpen] = useState(false);

    function handleOpenViewPartyModal() {
        setIsViewPartyModalOpen(true);
    }

    function handleClosedViewPartyModal() {
        setIsViewPartyModalOpen(false);
    }

    return (
        <Router>
            <PartiesProvider>
                <Routes />
                <GlobalStyle />
                <Dashboard 
                    onOpenNewPartyModal ={handleOpenNewPartyModal} 
                    onOpenViewPartyModal={handleOpenViewPartyModal} 
                />

                <NewPartyModal 
                    isOpen={isNewPartyModalOpen}
                    onRequestClose={handleClosedNewPartyModal}
                />

                <ViewPartyModal 
                    isOpen={isViewPartyModalOpen}
                    onRequestClose={handleClosedViewPartyModal}
                />

            </PartiesProvider>
        </Router>
    )
}