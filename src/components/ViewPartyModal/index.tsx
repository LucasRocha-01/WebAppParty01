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

    // const {parties} = useParties()


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
                
                {/* <h1>{parties.filter( party => party.id === id)}</h1> */}

                <h1>Descrição da Festa"</h1>

                <h1>Data da Festa dd/mm/aaaa"</h1>

                <h1>Categoria da Festa"</h1>

            </Container>
        </Modal>
    )
}