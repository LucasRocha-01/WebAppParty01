import Modal from 'react-modal';

import CloseImg from '../../assets/images/close.svg';
import { useParties } from '../../hooks/useParties';

import { Container } from './styles';
// import GlobalStyle from '../../styles/globalStyles'

Modal.setAppElement('#root')

interface ViewPartyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface filteredPartyProps {
    title?: string;
}

export function ViewPartyModal({isOpen, onRequestClose}: ViewPartyModalProps, {title}: filteredPartyProps) {

    const {parties, idParty} = useParties()

    const NumIdParty = idParty

    const filteredParty = parties.filter(party => party.id.toString() === NumIdParty)

    console.log('id: ' + idParty);
    console.log(filteredParty);


    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName ="react-modal-overlay"
            className="react-modal-content"
            >

            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"> 

                <img src={CloseImg} alt="Fechar modal" />
            </button>

            <Container > 

                {/* <h2>{filteredParty.title}</h2> */}

                <h1>d</h1>
                    
                <div>
                    <h1>f</h1>
                </div>

            </Container>
        </Modal>
    )
}