import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { PartiesContext } from '../../PartiesContext';

import CloseImg from '../../assets/images/close.svg';

import { Container } from './styles';
// import GlobalStyle from '../../styles/globalStyles'

Modal.setAppElement('#root')

interface NewPartyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewPartyModal({isOpen, onRequestClose}: NewPartyModalProps) {
    const {createParty} = useContext(PartiesContext);

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    async function handleCreateNewParty(event: FormEvent) {
        event.preventDefault();

        await createParty({
            title,
            date,
            description,
            category
        })

        setTitle('');
        setDescription('');
        setCategory('');
        setDate('');

        onRequestClose();
        
    }

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

            <Container 
                onSubmit={handleCreateNewParty}> 

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

                <input placeholder="Data da Festa dd/mm/aaaa"
                    type="datetime-local"
                    value={date}
                    onChange={event => setDate(event.target.value)}
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