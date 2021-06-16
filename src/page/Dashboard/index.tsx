import React, { useState } from 'react';

import { NewPartyModal } from '../../components/modais/NewPartyModal';
import { ViewPartyModal } from '../../components/modais/ViewPartyModal';
// import { NewPartyModalcopy } from '../../components/modais/NewPartyModalcopy';

import { useParties } from "../../hooks/useParties";
import { useAuth } from "../../hooks/AuthContext";
import { useUsers } from '../../hooks/useUser';

import { Container, BoxContent, NextEvent, Anuncio, ImgParty } from "./styles";
import {BoxParty} from "../../components/BoxParty";

import logoImg from "../../assets/images/logo.png";
import PartyImg from "../../assets/images/party.jpg";
import AnuncioImg from "../../assets/images/Banner-vertical.gif";

import { HeaderView } from "../../styles/globalStyles";
import { Button } from "../../styles/globalStyles"

import { FiPower } from 'react-icons/fi';
import Footer from '../../components/Footer';

// interface DashboardProps {
//     onOpenNewPartyModal: () => void;
//     onOpenViewPartyModal: () => void;
// }

 const Dashboard: React.FC = () => {
    const {parties, setSlugView} = useParties()
    const { users } = useUsers();

    
    const { signOut } = useAuth();
    
    function handleSignOut() { signOut(); }
    
    const [isNewPartyModalOpen, setIsNewPartyModalOpen] = useState(false);

    function handleOpenNewPartyModal() {setIsNewPartyModalOpen(true);}
    function handleClosedNewPartyModal() {setIsNewPartyModalOpen(false);}
    
    const [isViewPartyModalOpen, setIsViewPartyModalOpen] = useState(false);

    function handleOpenViewPartyModal() {setIsViewPartyModalOpen(true);}
    function handleClosedViewPartyModal() {setIsViewPartyModalOpen(false);}

    console.log(users);

    return(
        <>
            <HeaderView>    
                <div>
                    <img alt="test" className="logo" src={logoImg}/>
                    
                    

                    <button onClick={handleSignOut} >
                        

                        <FiPower />
                    </button>
                </div>  
                {/* {users.map(user => (
                    <li key={user.id}>
                        <p>{user.name}</p>
                    </li>
                ))}      */}


                
            </HeaderView>
            <Container>
                


                    <div className="col-6">
                        <h1>Proximo Evento</h1>
                        <NextEvent>
                            {/* {parties.filter(party => {party.date_init === Math.min(party.date_init) }) } */}

                            <ImgParty style={{backgroundImage: `url(${PartyImg})` }} />
                            <div>
                                <h1>Color Fest</h1>
                            </div>
                        </NextEvent>

                        <BoxContent> 


                            {parties
                            // .filter( party => party.owner_id === users  )
                            .map(party => (
                                    <li key={party.id} >  

                                        <div onClick={() => setSlugView(party.party_slug)}>
                                            <div onClick={handleOpenViewPartyModal}>
                                        <BoxParty
                                            name={party.name}
                                            imgParty={party.banner_link}
                                            date_init={party.date_init}
                                            date_close={party.date_close}
                                            type_event={party.type_event}
                                        />
                                            </div>
                                        </div>
                                        
                                    </li>      
                                )
                            )}    
                        </BoxContent>
                    </div>
                    <div className="col-2">
                        <Button 
                            onClick={handleOpenNewPartyModal}
                        >
                        Nova Festa
                        </Button>
                        <Anuncio >
                            <img src={AnuncioImg} alt="anuncio" />
                        </Anuncio>
                    </div>

            </Container>

            <NewPartyModal  isOpen={isNewPartyModalOpen}    onRequestClose={handleClosedNewPartyModal} />
            <ViewPartyModal isOpen={isViewPartyModalOpen}   onRequestClose={handleClosedViewPartyModal} />
            {/* <NewPartyModalcopy isOpen={isNewPartyModalOpen}   onRequestClose={handleClosedNewPartyModal} /> */}

            <Footer />
        </>
    )
}
export default Dashboard;
