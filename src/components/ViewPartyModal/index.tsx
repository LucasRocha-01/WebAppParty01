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

export function ViewPartyModal({isOpen, onRequestClose}: ViewPartyModalProps) {

    const {parties, idParty} = useParties()

    let NumIdParty = Number(idParty)

    console.log('id: ' + idParty);


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

                <h2>Party Infos</h2>
                    
                <div>
                    {parties.filter(party => party.id === NumIdParty )}
                </div>

            </Container>
        </Modal>
    )
}