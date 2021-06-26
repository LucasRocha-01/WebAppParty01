import React, { useState } from 'react';

import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";

import { NewPartyModal } from '../../components/modais/parties/NewPartyModal';
import { ViewPartyModal } from '../../components/modais/parties/ViewPartyModal';
import { ViewUser } from '../../components/modais/users/ViewUser';
// import { NewPartyModalcopy } from '../../components/modais/NewPartyModalcopy';

import { useParties } from "../../hooks/useParties";
import { useAuth } from "../../hooks/AuthContext";

import { Container, BoxContent, NextEvent, Anuncio, InfoSemParty } from "./styles";
import {BoxParty} from "../../components/BoxParty";

import logoImg from "../../assets/images/logo.png";
import imgPB from "../../assets/images/patternbanner.jpg";
// import imgPL from "../../assets/images/patternLogo.jpg";
import AnuncioImg from "../../assets/images/Banner-vertical.gif";

import { HeaderView } from "../../styles/globalStyles";
import { Button as B2 } from "../../styles/globalStyles"

import { FiInfo, FiAlignJustify } from 'react-icons/fi';
import Footer from '../../components/Footer';

// interface DashboardProps {
//     onOpenNewPartyModal: () => void;
//     onOpenViewPartyModal: () => void;
// }

// interface User {
//     id: number,
//     name: string,
//     email: string,
//     password: string,
//     avatar: string,
//     bio: string,
//     birthdate: string,
//     presences: string,
//     created_at: string,
//     updated_at: string
// }

// interface UserT {
//     user: User;
// }

const Dashboard: React.FC = () => {
    
    // const [users, setUsers] = useState<UserT>();
    
    //    useEffect(() => {
    //        api.get('/owner/profile')
    //        .then((response => setUsers(response.data)))
    //    },[]) 
    //    console.log(users?.user.name);
    

    const {parties, setSlugView} = useParties()
    
    const { signOut } = useAuth();
    
    function handleSignOut() { signOut(); }
    
    const [isNewPartyModalOpen, setIsNewPartyModalOpen] = useState(false);
    function handleOpenNewPartyModal() {setIsNewPartyModalOpen(true);}
    function handleClosedNewPartyModal() {setIsNewPartyModalOpen(false);}
    
    const [isViewPartyModalOpen, setIsViewPartyModalOpen] = useState(false);
    function handleOpenViewPartyModal() {setIsViewPartyModalOpen(true);}
    function handleClosedViewPartyModal() {setIsViewPartyModalOpen(false);}
    
    const [isViewUserModalOpen, setIsViewUserModalOpen] = useState(false);
    function handleOpenViewUserModal() {setIsViewUserModalOpen(true);}
    function handleClosedViewUserModal() {setIsViewUserModalOpen(false);}

    // const copyParties = [...parties]
    const partiesSorted = [...parties]
    const firstParty = [...partiesSorted]

    partiesSorted.sort((a,b) => (a.date_init > b.date_init) ? 1:-1);
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClose = () => {
        setAnchorEl(null);
      };
      
      const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
      };
    return(
        <>
            <HeaderView>    
                <div>
                    <img alt="test" className="item logo" src={logoImg}/>
                                        
                    <div className="menuReact">
                            <Button
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <FiAlignJustify />
                            </Button>
                            <Menu
                                keepMounted
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                open={Boolean(anchorEl)}
                            >
                                {/* <MenuItem onClick={handleClose}>My Account</MenuItem> */}
                                {/* <MenuItem onClick={handleClose}>Settings</MenuItem> */}
                                <MenuItem onClick={handleOpenViewUserModal}>User</MenuItem>
                                <MenuItem onClick={handleSignOut}>Sair</MenuItem>
                            </Menu>
                            </div>


                    {/* <button onClick={handleSignOut} >
                        <FiPower />
                    </button> */}
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
                                        {new Intl.DateTimeFormat('pt-BR',  {dateStyle: 'short', timeStyle: 'short'}).format(
                                        new Date(party.date_init))+'H'}
                                        </h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <h1>Termino:</h1>
                                        <h2>
                                        {new Intl.DateTimeFormat('pt-BR',  {dateStyle: 'short', timeStyle: 'short'}).format(
                                        new Date(party.date_close))+'H'}
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
                
                <B2 className="btnAddParty" onClick={handleOpenNewPartyModal}>
                    Nova Festa
                </B2>

                <Anuncio className="adsParty">
                    <img src={AnuncioImg} alt="anuncio" />
                </Anuncio>

            </Container>

            <NewPartyModal  isOpen={isNewPartyModalOpen}    onRequestClose={handleClosedNewPartyModal} />
            <ViewPartyModal isOpen={isViewPartyModalOpen}   onRequestClose={handleClosedViewPartyModal} />
            <ViewUser       isOpen={isViewUserModalOpen}    onRequestClose={handleClosedViewUserModal} />

            <Footer />
        </>
    )
}
export default Dashboard;
