import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';

import CloseImg from '../../../assets/images/close.svg';
import { useToast } from '../../../hooks/toast';
import { useUsers } from '../../../hooks/useUser';
import avatarImg from '../../../assets/images/avatar.jpeg';

import { Container } from './styles';
import { FiCamera } from 'react-icons/fi';

Modal.setAppElement('#root')

interface NewPartyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function EditUser({isOpen, onRequestClose}: NewPartyModalProps) {
    const { users, editUser } = useUsers();
    const { addToast } = useToast();

    console.log(users?.user.name);
    
    const [name, setName]       = useState(`${users?.user.name? users.user.name : ''}`); 
    const [avatar, setAvatar]   = useState(users?.user.avatar? users.user.avatar : {}); 
    const [bio, setBio]         = useState(`${users?.user.bio? users.user.bio : ''}`); 

    const handleChangeAvatar = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) {
                setAvatar(e.target.files[0])
            }
        },[]
    );
    
    async function handleEditUser(event: FormEvent) {
        
        event.preventDefault();
        
        await editUser({
            name,
            bio,
            avatar
        })

        addToast({
            type: 'success',
            title: 'Sucesso',
            description: 'Suas informações foram atualizadas',
        });

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
                onSubmit={handleEditUser}> 

            <h2 className="titulo">Perfil</h2>
                

                <div className="avatarImg">
                    <img src={users?.user.avatar ? users.user.avatar : avatarImg} alt="avatar" />
                </div>
                
                <div className="imgBorder">
                    <label className="avatarInput">
                        <input 
                            type="file" 
                            onChange={handleChangeAvatar}
                        />
                        <FiCamera />
                    </label>
                </div>


                <div className="row">
                    <input 
                        placeholder="Nome Usuário"
                        value={name}
                        required={true}
                        onChange={event => setName(event.target.value)}
                    />
                    
                    <textarea 
                        rows={6}
                        placeholder="Biografia"
                        value={bio}
                        onChange={event => setBio(event.target.value)}
                        className="biografia"
                    />
                </div> 

                <button type="submit">
                    Salvar
                </button>

            </Container>
        </Modal>
    )
}