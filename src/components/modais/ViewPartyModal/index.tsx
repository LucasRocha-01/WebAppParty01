import { useState } from 'react';

import { FiX, FiTrash } from 'react-icons/fi';
import { TiPencil } from 'react-icons/ti';
import Modal from 'react-modal';

import { EditPartyModal } from '../EditPartyModal';

import imgBanner from '../../../assets/images/patternbanner.jpg';

import { useParties } from '../../../hooks/useParties';

import { Container } from './styles';

Modal.setAppElement('#root')

interface ViewPartyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface filteredPartyProps {
    title?: string;
    dateInit: any;
}




export function ViewPartyModal({isOpen, onRequestClose}: ViewPartyModalProps, {title}: filteredPartyProps) {

    const {removeParty, parties, slugView} = useParties()

    const party_slug = slugView;
        function handleRemoveParty() {
        console.log('teste')

        removeParty(
            party_slug,
        )

        onRequestClose();
    }
    const [isEditPartyModalOpen, setIsEditPartyModalOpen] = useState(false);

    function handleOpenEditPartyModal() {setIsEditPartyModalOpen(true);}
    function handleClosedEditPartyModal() {setIsEditPartyModalOpen(false);}
    

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName ="react-modal-overlay"
            className="react-modal-content"
        >

            <div className="react-modalView-menu">
                <button
                    type="button"
                    onClick={handleRemoveParty}
                >
                    <FiTrash />
                </button>
                <button
                    type="button"
                    onClick={handleOpenEditPartyModal}
                >
                    <TiPencil />
                </button>
                <button 
                    type="button" 
                    onClick={onRequestClose} 
                    // className="react-modalView-menu"
                    > 
                    {/* <img src={CloseImg} alt="Fechar modal" /> */}
                    <FiX/>
                </button>


            </div>

            <Container > 

                {parties.filter( party => party.party_slug === slugView ).map( party => (
                    
                    <div key={party.party_slug}>
                        <img src={party.banner_link? party.banner_link : imgBanner} alt={party.name} />
                        
                        <div className="row">
                            <div className="col-6">
                                <span>Nome Evento:</span>
                                <h2>{party.name}</h2>

                                {/* <span className="partySlug">party_slug:</span>
                                <a href={party.party_slug}>{party.party_slug}</a>
                                <h2>{party.party_slug}</h2> */}
                                

                                <span>LGBT?:
                                <h2>{party.type_event}</h2>
                                </span>
                                <span>address:</span>
                                <h2>{party.address}</h2>
                                
                                <span>zipcode:</span>
                                <h2>{party.zipcode}</h2>
                                
                                <span>number:</span>
                                <h2>{party.number}</h2>
                                
                                <span>district:</span>
                                <h2>{party.district}</h2>
                                
                                <span>city:</span>
                                <h2>{party.city}</h2>
                            </div>

                            <div className="col-6">
                                <span>state:</span>
                                <h2>{party.state}</h2>
                                
                                <span>tel:</span>
                                <h2>{party.tel}</h2>
                                
                                <span>ticket_link:</span>
                                <h2>{party.ticket_link}</h2>
                                
                                <span>tutorial_video_link:</span>
                                <h2>{party.tutorial_video_link}</h2>
                                
                                <span>point_of_reference:</span>
                                <h2>{party.point_of_reference}</h2>
                                
                                <span>presences:</span>
                                <h2>{party.presences}</h2>
                                
                                <span>theme:</span>
                                <h2>{party.theme}</h2>
                                
                                <span>atractions:</span>
                                <h2>{party.atractions}</h2>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <span>Início do Evento:</span>
                                <h2>
                                    {
                                        new Date(party.date_init).getUTCDate()+'/'+
                                        new Date(party.date_init).getUTCMonth()+'/'+
                                        new Date(party.date_init).getUTCFullYear()
                                    }
                                        {' às '}
                                    {
                                        new Date(party.date_init).getUTCHours()+':'+
                                        new Date(party.date_init).getUTCMinutes()+'H'
                                    }
                                </h2>
                            </div>
                            <div className="col-6">        
                                <span>Término do Evento:</span>
                                <h2>
                                    {
                                        new Date(party.date_close).getUTCDate()+'/'+
                                        new Date(party.date_close).getUTCMonth()+'/'+
                                        new Date(party.date_close).getUTCFullYear()
                                    }
                                        {' às '}
                                    {
                                        new Date(party.date_close).getUTCHours()+':'+
                                        new Date(party.date_close).getUTCMinutes()+'H'
                                    }
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}

            </Container>

            <EditPartyModal  isOpen={isEditPartyModalOpen}    onRequestClose={handleClosedEditPartyModal} />
        </Modal>
    )
}