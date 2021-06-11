import { ContainerBP, ContentBP } from "./styles";

import horaImg from "../../assets/images/hora.svg";

interface BoxPartyProps {
    name: string;
    imgParty: string;
    date_init: string;
    date_close: string;
    type_event: string;
}

export function BoxParty(props: BoxPartyProps) {
    return(
        <li> 
            <ContainerBP>
                <ContentBP >
                    <section className="grid grid-template-areas">
                        <div className="item logo" ><img alt={props.name} src={props.imgParty} /></div>
                        <div className="item nameParty" >{props.name}</div>
                        <div className="item typeParty" >{props.type_event}</div>
                        <img className="item hourClock" alt="Hour Clock" src={horaImg} />
                        <div className="item dateInit" >{props.date_init}</div>                      
                        <div className="item dateClose" >{props.date_close}</div>
                    </section>
                </ContentBP> 
            </ContainerBP> 
        </li>
            
    )
}