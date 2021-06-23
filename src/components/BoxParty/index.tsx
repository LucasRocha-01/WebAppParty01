import { ContainerBP, ContentBP } from "./styles";

import logoImg from "../../assets/images/patternLogo.jpg";
import { FiCalendar} from "react-icons/fi";

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
                            {new Intl.DateTimeFormat('pt-BR',  {dateStyle: 'short', timeStyle: 'short'}).format(
                            new Date(props.date_init))+'H'}
                            </div>     

                        <div className="item dateClose" >
                            <FiCalendar />                            
                            {new Intl.DateTimeFormat('pt-BR',  {dateStyle: 'short', timeStyle: 'short'}).format(
                            new Date(props.date_close))+'H'}
                        </div>
                    </section>
                </ContentBP> 
            </ContainerBP> 
            
    )
}