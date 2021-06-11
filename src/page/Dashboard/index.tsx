import { Container, BoxContent, View, NextEvent, Anuncio, ImgParty } from "./styles";
import { Button } from "../../styles/globalStyles"

// import { Link } from 'react-router-dom';

import logoImg from "../../assets/images/logo.png";
import outButtomImg from "../../assets/images/outButton.svg";

import PartyImg from "../../assets/images/party.jpg";

import { HeaderView } from "../../styles/globalStyles";

import { useParties } from "../../hooks/useParties";
import { Link } from "react-router-dom";
import {BoxParty} from "../../components/BoxParty";

interface DashboardProps {
    onOpenNewPartyModal: () => void;
    onOpenViewPartyModal: () => void;
}

export default function Dashboard({onOpenNewPartyModal, onOpenViewPartyModal}: DashboardProps) {
    const {parties} = useParties()
    
    return(
        <>
            <HeaderView>    
                <div>
                    <img alt="test" className="logo" src={logoImg}/>
                    
                    <Link to="/">
                        <img alt="test" className="outButtom" src={outButtomImg} />
                    </Link>
                </div>            
            </HeaderView>
            <Container>
                
                <View>

                    <div>
                        <h1>Proximo Evento</h1>
                        <NextEvent>
                            {/* {parties.or} */}
                            <ImgParty style={{backgroundImage: `url(${PartyImg})` }} />
                            <div>
                                <h1>Color Fest</h1>
                            </div>
                        </NextEvent>

                        <BoxContent> 
                            {parties.map(party => (
                                    <li key={party.id} >  

                                        <BoxParty 
                                            name={party.name}
                                            imgParty={party.banner_link}
                                            date_init={party.date_init}
                                            date_close={party.date_close}
                                            type_event={party.type_event}

                                        />
                                        
                                    </li>      
                                )
                            )}    
                        </BoxContent>
                    </div>
                    <div>
                        <Button 
                            onClick={onOpenNewPartyModal}
                        >
                        Nova Festa
                        </Button>
                        <Anuncio>
                            <h1>Anúncios01</h1>
                        </Anuncio>
                    </div>
                </View>
            </Container>
        </>
    )
}

