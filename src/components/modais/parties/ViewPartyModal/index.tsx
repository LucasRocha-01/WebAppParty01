import { useState } from 'react';

import { FiX, FiTrash } from 'react-icons/fi';
import { TiPencil } from 'react-icons/ti';
import Modal from 'react-modal';

import { EditPartyModal } from '../EditPartyModal';
// import { DellPartyModal } from '../DellpartyModal';

import imgBanner from '../../../../assets/images/patternbanner.jpg';

import { useParties } from '../../../../hooks/useParties';

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
    
    // const [isDellPartyModalOpen, setIsDellPartyModalOpen] = useState(false);

    // function handleOpenDellPartyModal() {setIsDellPartyModalOpen(true);}
    // function handleClosedDellPartyModal() {setIsDellPartyModalOpen(false);}
    
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
                        
                        <div className="row title">
                                <span>Nome Evento:</span>
                                <h2>{party.name}</h2>

                                <span>Descri????o:</span>
                                <h2>{party.description}</h2>
                        </div>

                        <div className="row">
                            <div className="col-6">

                                {/* <span className="partySlug">party_slug:</span>
                                <a href={party.party_slug}>{party.party_slug}</a>
                                <h2>{party.party_slug}</h2> */}
                                

                                <span>Endere??o:</span>
                                <h2>{party.address}</h2>
                                
                                <span>Numero:</span>
                                <h2>{party.number}</h2>

                                <span>CEP:</span>
                                <h2>{party.zipcode}</h2>
                                
                                {/* <span>Slug:</span>
                                <h2>{party.party_slug}</h2> */}

                                <span>Estado:</span>
                                <h2>{party.state}</h2>
                                
                                <span>Bairro:</span>
                                <h2>{party.district}</h2>
                                
                                <span>Cidade:</span>
                                <h2>{party.city}</h2>
                                
                            </div>

                            <div className="col-6">
                                
                                <span>Telefone:</span>
                                <h2>{party.tel}</h2>
                                
                                <span>Link de Compra Ingresso:</span>
                                <h2>{party.ticket_link != null ? <a href={party.ticket_link}>Link da compra</a> : 'Sem Ticket' }</h2>
                                
                                <span>Video da Festa:</span>
                                <h2>{party.tutorial_video_link != null ? <a href={party.tutorial_video_link}>Link do V??deo</a> : 'Sem v??deo' }</h2>
                                
                                <span>Ponto de Referencia:</span>
                                <h2>{party.point_of_reference}</h2>
                                
                                <span>Presen??as:</span>
                                <h2>{JSON.parse(party.presences).length === 0 ? "Sem presen??as confirmadas" : JSON.parse(party.presences).length}</h2>
                                
                                <span>Tema da Festa:</span>
                                <h2>{party.theme}</h2>
                                
                                <span>Atra????es:</span>
                                <h2>{party.atractions}</h2>
                                
                                <span>LGBT?:
                                <h2>{party.type_event === 'true' ? 'true' : 'false'}</h2>
                                </span>

                            </div>
                        </div>

                        <div className="row">
                            
                        </div>     

                        <div className="row">
                            <div className="col-6">
                            <span>Latitude:</span>
                                <h2>{party.latitude}</h2>
                            </div>
                            <div className="col-6">
                            <span>Longitude:</span>
                                <h2>{party.longitude}</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <span>In??cio do Evento:</span>
                                <h2>
                                {new Intl.DateTimeFormat('pt-BR',  {dateStyle: 'short', timeStyle: 'medium'}).format(
                                        new Date(party.date_init))}
                                </h2>
                            </div>
                            <div className="col-6">        
                                <span>T??rmino do Evento:</span>
                                <h2>
                                {new Intl.DateTimeFormat('pt-BR',  {dateStyle: 'short', timeStyle: 'medium'}).format(
                                        new Date(party.date_close))}
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}

            </Container>

            <EditPartyModal  isOpen={isEditPartyModalOpen}    onRequestClose={handleClosedEditPartyModal} />
            {/* <DellPartyModal  isOpen={isDellPartyModalOpen}    onRequestClose={handleClosedDellPartyModal} /> */}
        </Modal>
    )
}