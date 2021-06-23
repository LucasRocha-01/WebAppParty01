import React, { useState } from 'react';

import { NewPartyModal } from '../../components/modais/NewPartyModal';
import { ViewPartyModal } from '../../components/modais/ViewPartyModal';
// import { NewPartyModalcopy } from '../../components/modais/NewPartyModalcopy';

import { useParties } from "../../hooks/useParties";
import { useAuth } from "../../hooks/AuthContext";
// import { useUsers } from '../../hooks/useUser';

import { Container, BoxContent, NextEvent, Anuncio, InfoSemParty } from "./styles";
import {BoxParty} from "../../components/BoxParty";

import logoImg from "../../assets/images/logo.png";
import imgPB from "../../assets/images/patternbanner.jpg";
// import imgPL from "../../assets/images/patternLogo.jpg";
import AnuncioImg from "../../assets/images/Banner-vertical.gif";

import { HeaderView } from "../../styles/globalStyles";
import { Button } from "../../styles/globalStyles"

import { FiInfo, FiPower } from 'react-icons/fi';
import Footer from '../../components/Footer';

// interface DashboardProps {
//     onOpenNewPartyModal: () => void;
//     onOpenViewPartyModal: () => void;
// }

 const Dashboard: React.FC = () => {
    const {parties, setSlugView} = useParties()
    // const { users } = useUsers();

    
    const { signOut } = useAuth();
    
    function handleSignOut() { signOut(); }
    
    const [isNewPartyModalOpen, setIsNewPartyModalOpen] = useState(false);

    function handleOpenNewPartyModal() {setIsNewPartyModalOpen(true);}
    function handleClosedNewPartyModal() {setIsNewPartyModalOpen(false);}
    
    const [isViewPartyModalOpen, setIsViewPartyModalOpen] = useState(false);

    function handleOpenViewPartyModal() {setIsViewPartyModalOpen(true);}
    function handleClosedViewPartyModal() {setIsViewPartyModalOpen(false);}

    // const copyParties = [...parties]
    const partiesSorted = [...parties]
    const firstParty = [...partiesSorted]

    partiesSorted.sort((a,b) => (a.date_init > b.date_init) ? 1:-1);
    
    ;

    return(
        <>
            <HeaderView>    
                <div>
                    
                    <img alt="test" className="item logo" src={logoImg}/>
                    

                    <button onClick={handleSignOut} >
                        <FiPower />
                    </button>
                </div>  


                
            </HeaderView>
            <Container className="grid main">

                <div className="nextEvent">
                    {parties.length === 0 ? 
                    
                    <InfoSemParty>
                        <div><FiInfo size={30} /></div>
                        <div>
                            <h1>Você ainda não possui festas cadastradas!</h1>
                            <span>Suas festas apareceram aqui!</span>
                        </div>
                    </InfoSemParty>
                    
                    
                    :
                    
                    firstParty
                    .sort((a,b) => (a.date_init > b.date_init) ? 1:-1)
                    .slice(0,1)
                    .map(party => ( 
                    <div key={party.id}>
                        <h1>Proximo Evento</h1>
                        <NextEvent 
                            className="boxNE"
                            onClick={() => {
                                setSlugView(party.party_slug);
                                handleOpenViewPartyModal()
                            }}
                        >                            

                            <img className="imgNE"
                                src={party.banner_link? party.banner_link : imgPB} 
                                alt="banner"/>

                            <div className="content contentNE ">

                                <div className="row">
                                    <h1>Nome Festa</h1>
                                    <h2>{party.name}</h2>
                                </div>

                                <div className="row description">
                                    <h1>Descrição</h1>
                                    <h2>{party.description}</h2>
                                </div>
                                    
                                <div className="row">
                                    <div className="col-6">
                                        <h1>Início:</h1>
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
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <h1>Termino:</h1>
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
                                

                        </NextEvent>
                    </div>
                    ))
                    
                } 
                </div>      

                <BoxContent className=" boxParty"> 
                    {partiesSorted.slice(1)
                        .map(party => (
                                <li key={party.id} >  
                                    <div onClick={() => {
                                        setSlugView(party.party_slug);
                                        handleOpenViewPartyModal()
                                        }}>
                                        <BoxParty
                                            name={party.name}
                                            imgParty={party.banner_link}
                                            date_init={party.date_init}
                                            date_close={party.date_close}
                                            theme={party.theme}
                                        />
                                    </div>
                                </li>      
                            )
                    )}    
                </BoxContent>
                
                <Button className="btnAddParty" onClick={handleOpenNewPartyModal}>
                    Nova Festa
                </Button>

                <Anuncio className="adsParty">
                    <img src={AnuncioImg} alt="anuncio" />
                </Anuncio>

            </Container>

            <NewPartyModal  isOpen={isNewPartyModalOpen}    onRequestClose={handleClosedNewPartyModal} />
            <ViewPartyModal isOpen={isViewPartyModalOpen}   onRequestClose={handleClosedViewPartyModal} />
            {/* <NewPartyModalcopy isOpen={isNewPartyModalOpen}   onRequestClose={handleClosedNewPartyModal} /> */}

            <Footer />
        </>
    )
}
export default Dashboard;
