import { useEffect } from 'react';
import { api } from '../../services/api';

import { BoxParty } from "../../components/BoxParty";
import { Container, BoxContent, View, NextEvent, Anuncio, ImgParty } from "./styles";

import CalendarImg from "../../assets/images/calendar.svg";
import logoImg from "../../assets/images/logo.png";
import outButtomImg from "../../assets/images/outButton.svg";

import PartyImg from "../../assets/images/party.jpg";

import { HeaderView } from "../../styles/globalStyles";

export function PartysTable() {
    useEffect(() => {
        api.get('partys')
        .then(response => console.log(response.data))
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
                            <BoxParty />
                            <BoxParty />
                            <BoxParty />
                            <BoxParty />
                            <BoxParty />
                            <BoxParty />    
                        </BoxContent>
                    </div>
                    <div>
                        <button>Nova Festa</button>
                        <Anuncio>
                            <h1>Anúncios01</h1>
                        </Anuncio>
                    </div>
                </View>
            </Container>
        </>
    )
}

