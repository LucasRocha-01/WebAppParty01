import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { useAuth } from '../../../../hooks/AuthContext';

import api from '../../../../services/api';

import { Container } from './styles';

Modal.setAppElement('#root')

interface NewPartyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function DellUser({isOpen, onRequestClose}: NewPartyModalProps) {
    const { signOut } = useAuth();
    
    function handleRemoveUser() {
        
        api.delete('/owner/profile/delete')
        
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

            <h2 className="titulo">Deseja deletar permatentemente sua conta?</h2>
                

                <div className="row">
                    
                    <button
                        onClick={onRequestClose}
                    > 
                        Cancelar
                    </button>
                    <button
                        onClick={handleRemoveUser}
                        className="excluir"
                    >
                        Excluir
                    </button>

                </div> 

            </Container>
        </Modal>
    )
}