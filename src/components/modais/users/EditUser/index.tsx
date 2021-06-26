import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import Modal from 'react-modal';

import { useToast } from '../../../../hooks/toast';
import { useUsers } from '../../../../hooks/useUser';
import avatarImg from '../../../../assets/images/avatar.jpeg';

import { Container } from './styles';
import { FiCamera, FiTrash, FiX } from 'react-icons/fi';
import { TiPencil } from 'react-icons/ti';

Modal.setAppElement('#root')

interface NewPartyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function EditUser({isOpen, onRequestClose}: NewPartyModalProps) {
    const { users, editUser } = useUsers();
    const { addToast } = useToast();

    console.log(users?.user);
    
    const [name, setName]       = useState(`${users ? users.user.name : ''}`); 
    const [avatar, setAvatar]   = useState(users ? users.user.avatar : {}); 
    const [bio, setBio]         = useState(`${users ? users.user.bio : ''}`); 

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
            className="react-modal-content modsUser"
            >

<div className="react-modalView-menu">
    
                
                <button 
                    type="button" 
                    onClick={onRequestClose} 
                    // className="react-modalView-menu"
                    > 
                    <FiX/>
                </button>


            </div>

            <Container 
                onSubmit={handleEditUser}> 

            <h2 className="titulo">Editar Perfil</h2>

                
                <div className="imgBorder">
                    <label className="avatarInput">
                        <input 
                            type="file" 
                            onChange={handleChangeAvatar}
                        />
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