import { ContainerBP, ContentBP } from "./styles";

import logoImg from "../../assets/images/patternLogo.jpg";
import { FiCalendar, FiClock } from "react-icons/fi";

interface BoxPartyProps {
    name: string;
    imgParty: string;
    date_init: string;
    date_close: string;
    theme: string;
}

export function BoxParty(props: BoxPartyProps) {


    return(
            <ContainerBP>
                <ContentBP >
                    <section className="grid grid-template-areas">
                        <div className="item logo" ><img alt={props.name} src={props.imgParty? props.imgParty : logoImg} /></div>
                        <div className="item nameParty" >{props.name? 'Festa: '+props.name : ''}</div>
                        <div className="item typeParty" >{props.theme? 'Tema: '+props.theme : ''}</div>
                        
                        <div className="item dateInit" >
                            <FiCalendar />
                            {
                                new Date(props.date_init).getUTCDate()+'/'+
                                new Date(props.date_init).getUTCMonth()+'/'+
                                new Date(props.date_init).getUTCFullYear()
                            }
                                <FiClock/>
                            {
                                new Date(props.date_init).getUTCHours()+':'+
                                new Date(props.date_init).getUTCMinutes()+'H'
                            }
                            </div>     

                        <div className="item dateClose" >
                            <FiCalendar />
                            {
                                new Date(props.date_close).getUTCDate()+'/'+
                                new Date(props.date_close).getUTCMonth()+'/'+
                                new Date(props.date_close).getUTCFullYear()
                            }
                                <FiClock/>
                            {
                                new Date(props.date_close).getUTCHours()+':'+
                                new Date(props.date_close).getUTCMinutes()+'H'
                            }
                        </div>
                    </section>
                </ContentBP> 
            </ContainerBP> 
            
    )
}