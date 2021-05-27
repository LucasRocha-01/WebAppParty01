import { useState } from 'react';
import Modal from 'react-modal';
import { NewPartyModal } from './components/NewPartyModal';
import PartiesTable from './page/PartiesTable';
import { PartiesProvider } from './PartiesContext';
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

    return (
        <>
            <PartiesProvider>
                 
                <GlobalStyle />
                <PartiesTable onOpenNewPartyModal={handleOpenNewPartyModal} />

                <NewPartyModal 
                    isOpen={isNewPartyModalOpen}
                    onRequestClose={handleClosedNewPartyModal}
                />

            </PartiesProvider>
        </>
    )
}