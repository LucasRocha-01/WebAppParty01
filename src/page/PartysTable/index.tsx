import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { BoxParty } from "../../components/BoxParty";
import { Container, BoxContent, View, NextEvent, Anuncio, ImgParty } from "./styles";
import { Button } from "../../styles/globalStyles"

import CalendarImg from "../../assets/images/calendar.svg";
import logoImg from "../../assets/images/logo.png";
import outButtomImg from "../../assets/images/outButton.svg";

import PartyImg from "../../assets/images/party.jpg";

import { HeaderView } from "../../styles/globalStyles";

import { ContainerBP, ContentBP, ImgPartyBP } from "./styles";
import horaImg from "../../assets/images/hora.svg";
interface PartysTableProps {
    onOpenNewPartyModal: () => void;
}

interface Party {
    id: number;
    title: string;
    data: string;
    description: string;
    category: string;
}

export function PartysTable({onOpenNewPartyModal}: PartysTableProps) {
    const [partys, setPartys] = useState<Party[]>([]);

    useEffect(() => {
        api.get('parties')
        .then(response => setPartys(response.data.parties))
    }, []);

    return(
        <>
            <HeaderView>    
                <div>
                    <img className="logo" src={logoImg}/>
                    <img className="outButtom" src={outButtomImg} />
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
                            {partys.map(party => (
                                    <li key={party.id}>  
                                        <ContainerBP>
                                            <span>
                                                { new Intl.DateTimeFormat('pt-BR').format(
                                                    new Date(party.data)
                                                )}
                                            </span>
                                            <ContentBP>
                                                <ImgPartyBP style={{backgroundImage: `url(${PartyImg})` }} />
                                                <span>{party.title}</span>

                                                <img className="hourClock" src={horaImg} />
                                                <p> {party.title} </p>
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

