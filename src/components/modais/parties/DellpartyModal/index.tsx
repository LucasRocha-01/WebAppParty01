import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { useParties } from '../../../../hooks/useParties';

import { Container } from './styles';

Modal.setAppElement('#root')

interface NewPartyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function DellPartyModal({isOpen, onRequestClose}: NewPartyModalProps) {
    
    const {removeParty, slugView} = useParties()

    const party_slug = slugView;

    function handleRemoveParty() {
        console.log('teste')

        removeParty(
            party_slug,
        )

        onRequestClose();
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName ="react-modal-overlay"
            className="react-modal-content dellType"
            >

            <div className="react-modalView-menu">
    
                <button 
                    type="button" 
                    onClick={onRequestClose} 
                > 
                    <FiX/>
                </button>


            </div>

            <Container> 

            <h2 className="titulo">Deseja deletar permatentemente essa Festa?</h2>
                

                <div className="row">
                    
                    <button
                        onClick={onRequestClose}
                    > 
                        Cancelar
                    </button>
                    <button
                        onClick={handleRemoveParty}
                        className="excluir"
                    >
                        Excluir
                    </button>

                </div> 

            </Container>
        </Modal>
    )
}