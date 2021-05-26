import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
// import GlobalStyle from '../../styles/globalStyles'

import CloseImg from '../../assets/images/close.svg';
import { api } from '../../services/api';

Modal.setAppElement('#root')

interface NewPartyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewPartyModal({isOpen, onRequestClose}: NewPartyModalProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');


    function handleCreateNewParty(event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            description,
            category,
        };

        api.post('/parties', data)
        
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName ="react-modal-overlay"
            className="react-modal-content"
            >

            <button type="button" onClick={onRequestClose} className="react-modal-close"> 
                <img src={CloseImg} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewParty}> 

            <h2>Cadastrar Party</h2>
                
                <input 
                    placeholder="Nome da Festa"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input placeholder="Descrição da Festa"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />

                <input placeholder="Categoria da Festa"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}