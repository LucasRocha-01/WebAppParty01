import { useState } from 'react';
import Modal from 'react-modal';
import { NewPartyModal } from './components/NewPartyModal';
import { ViewPartyModal } from './components/ViewPartyModal';
import PartiesTable from './page/PartiesTable';
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
        <>
            <PartiesProvider>
                 
                <GlobalStyle />
                <PartiesTable 
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
        </>
    )
}