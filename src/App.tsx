import { useState } from 'react';
import Modal from 'react-modal';
import { NewPartyModal } from './components/NewPartyModal';
import { PartysTable } from './page/PartysTable';
import { SignIn } from './page/SignIn';
import { SignUp } from './page/SignUp';
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
            <GlobalStyle />
            <PartysTable onOpenNewPartyModal={handleOpenNewPartyModal} />
            {/* <SignIn /> */}
            {/* <SignUp /> */}

            <NewPartyModal 
                isOpen={isNewPartyModalOpen}
                onRequestClose={handleClosedNewPartyModal}
            />

        </>
    )
}