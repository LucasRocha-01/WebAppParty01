import { Container, BoxContent, View, NextEvent, Anuncio, ImgParty } from "./styles";
import { Button } from "../../styles/globalStyles"

// import { Link } from 'react-router-dom';

import logoImg from "../../assets/images/logo.png";
import outButtomImg from "../../assets/images/outButton.svg";

import PartyImg from "../../assets/images/party.jpg";

import { HeaderView } from "../../styles/globalStyles";

import { ContainerBP, ContentBP, ImgPartyBP } from "./styles";
import horaImg from "../../assets/images/hora.svg";
import { useParties } from "../../hooks/useParties";
import React from "react";
import { Link } from "react-router-dom";

interface DashboardProps {
    onOpenNewPartyModal: () => void;
    onOpenViewPartyModal: () => void;
}

export default function Dashboard({onOpenNewPartyModal, onOpenViewPartyModal}: DashboardProps) {
    const {parties, setIdParty} = useParties()
    
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
                            <ImgParty style={{backgroundImage: `url(${PartyImg})` }} />
                            <div>
                                <h1>Color Fest</h1>
                            </div>
                        </NextEvent>

                        <BoxContent> 
                            {parties.map(party => (
                                    <li key={party.id} >  
                                        <ContainerBP 
                                            onClick={() => setIdParty(String(party.id))}
                                        >
                                            <ContentBP onClick={() => onOpenViewPartyModal()}>
                                                <ImgPartyBP style={{backgroundImage: `url(${PartyImg})` }} />
                                                <span>{party.title}</span>

                                                <img alt="relogio" className="hourClock" src={horaImg} />
                                                <p> {new Intl.DateTimeFormat('pt-BR').format(
                                                        new Date(party.date))} </p>
                                            </ContentBP> 
                                        </ContainerBP> 
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

