import Modal from 'react-modal';

import { useUsers } from '../../../../hooks/useUser';
import avatarImg from '../../../../assets/images/avatar.jpeg';

import { EditUser } from '../EditUser'

import { Container } from './styles';
import { FiTrash, FiX } from 'react-icons/fi';
import { TiPencil } from 'react-icons/ti';
import { useState } from 'react';
import { DellUser } from '../delUser';

Modal.setAppElement('#root')

interface NewPartyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ViewUser({isOpen, onRequestClose}: NewPartyModalProps) {
    const { users } = useUsers();

    const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false)
    function handleOpenEditUserModal() {setIsEditUserModalOpen(true)}
    function handleClosedEditUserModal() {setIsEditUserModalOpen(false)}

    const [isDellUserModalOpen, setIsDellUserModalOpen] = useState(false)
    function handleOpenDellUserModal() {setIsDellUserModalOpen(true)}
    function handleClosedDellUserModal() {setIsDellUserModalOpen(false)}
 
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
                    onClick={handleOpenDellUserModal}
                >
                    <FiTrash />
                </button>
                <button
                    type="button"
                    onClick={handleOpenEditUserModal}
                >
                    <TiPencil />
                </button>
                <button 
                    type="button" 
                    onClick={onRequestClose} 
                    > 
                    <FiX/>
                </button>


            </div>

            <Container> 

            <h2 className="titulo">Perfil</h2>
                

                <div className="avatarImg">
                    <img src={users?.user.avatar ? users.user.avatar : avatarImg } alt="avatar" />
                </div>
                

                <div className="row">
                    
                    <span> Nome: </span>
                    <h2>{users?.user.name}</h2>
                    <br/><br/>
                    <span> Bio: </span>
                    <h2>{users?.user.bio}</h2>

                </div> 

            </Container>
            <EditUser isOpen={isEditUserModalOpen} onRequestClose={handleClosedEditUserModal} />
            <DellUser isOpen={isDellUserModalOpen} onRequestClose={handleClosedDellUserModal} />
        </Modal>
    )
}